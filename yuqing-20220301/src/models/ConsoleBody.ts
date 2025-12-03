// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ConsoleBody extends $dara.Model {
  appCode?: string;
  interfaceName?: string;
  paramJson?: string;
  requestId?: string;
  teamHashId?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'appCode',
      interfaceName: 'interfaceName',
      paramJson: 'paramJson',
      requestId: 'requestId',
      teamHashId: 'teamHashId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      interfaceName: 'string',
      paramJson: 'string',
      requestId: 'string',
      teamHashId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

