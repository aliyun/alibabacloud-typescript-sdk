// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSoftwaresRequestOsInfos extends $dara.Model {
  /**
   * @remarks
   * The OS architecture. Valid values:
   * 
   * *   x86_64
   * *   arm64
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * CentOS_7.9_64
   */
  osTag?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      osTag: 'OsTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      osTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

