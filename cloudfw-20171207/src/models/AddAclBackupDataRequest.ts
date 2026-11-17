// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAclBackupDataRequest extends $dara.Model {
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
   * The description of the backup data.
   * 
   * @example
   * bj-001
   */
  description?: string;
  /**
   * @remarks
   * The language of the request and response.
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
   * 115.194.124.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      backUpTime: 'BackUpTime',
      description: 'Description',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backUpTime: 'string',
      description: 'string',
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

