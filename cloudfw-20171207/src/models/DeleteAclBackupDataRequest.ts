// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAclBackupDataRequest extends $dara.Model {
  /**
   * @remarks
   * The backup time. The value is a UNIX timestamp accurate to seconds, which indicates the number of seconds that have elapsed since January 1, 1970 (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 1743683400
   */
  backUpTime?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the requester.
   * 
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

