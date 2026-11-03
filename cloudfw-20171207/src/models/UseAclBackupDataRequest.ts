// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UseAclBackupDataRequest extends $dara.Model {
  /**
   * @remarks
   * The backup time. The value is a UNIX timestamp accurate to seconds, such as 1672502400.
   * 
   * This parameter is required.
   * 
   * @example
   * 1743683400
   */
  backUpTime?: string;
  /**
   * @remarks
   * The language in which you want to receive messages.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 123.113.99.XXX
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

