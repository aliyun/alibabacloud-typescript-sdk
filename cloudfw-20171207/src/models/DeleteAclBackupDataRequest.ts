// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAclBackupDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1743683400
   */
  backUpTime?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 192.0.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      backUpTime: 'BackUpTime',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backUpTime: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

