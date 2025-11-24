// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVersionsResponseBodyVersionInfo extends $dara.Model {
  /**
   * @remarks
   * The edition of the ASM instance. Valid values:
   * 
   * *   `Default`: Standard Edition
   * *   `Pro`: Professional Edition that is commercially released
   * 
   * @example
   * Default
   */
  edition?: string;
  /**
   * @remarks
   * The list of ASM versions available for the ASM instance of the current edition.
   */
  versions?: string[];
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'string',
      versions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD65C0AD-D3C6-48D3-8D93-38D2015C****
   */
  requestId?: string;
  /**
   * @remarks
   * The available ASM versions.
   */
  versionInfo?: DescribeVersionsResponseBodyVersionInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      versionInfo: 'VersionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      versionInfo: { 'type': 'array', 'itemType': DescribeVersionsResponseBodyVersionInfo },
    };
  }

  validate() {
    if(Array.isArray(this.versionInfo)) {
      $dara.Model.validateArray(this.versionInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

