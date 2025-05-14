// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLiveTranscodeJobRequestTranscodeOutput extends $dara.Model {
  /**
   * @remarks
   * The streaming domain name of ApsaraVideo Live.
   * 
   * @example
   * mydomain
   */
  domainName?: string;
  /**
   * @remarks
   * The type of the output stream. A value of LiveCenter indicates that the URL of the output stream is generated based on the domain name of ApsaraVideo Live. The value can only be LiveCenter.
   * 
   * This parameter is required.
   * 
   * @example
   * LiveCenter
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

