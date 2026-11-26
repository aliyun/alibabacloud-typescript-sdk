// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25C11EE5-B7E8-481A-A07C-BD619971A570
   */
  requestId?: string;
  /**
   * @remarks
   * The recommended upgrade version in the format of "major version,minor version" (separated by a comma). The former is the target major major engine version upgrade, and the latter is the target minor major engine version upgrade.
   * 
   * @example
   * mm.v7.4.2.7-202608031659,mm.v7.3.2.12-202608071438
   */
  versionSuggestion?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      versionSuggestion: 'VersionSuggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      versionSuggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

