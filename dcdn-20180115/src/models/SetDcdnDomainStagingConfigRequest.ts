// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDcdnDomainStagingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. Separate multiple accelerated domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The list of features. Format: `[{"functionArgs":[{"argName":"parameter key","argValue":"parameter value"},{"argName":"xx","argValue":"xx"}],"functionName": feature name"}]`
   * 
   * > Separate multiple parameters with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"functionArgs\\":[{\\"argName\\":\\"enable\\",\\"argValue\\":\\"on\\",\\"argName\\":\\"pri\\",\\"argValue\\":\\"1\\",\\"argName\\":\\"rule\\",\\"argValue\\":\\"xxx\\"}],\\"functionName\\":\\"edge_function\\"}]
   */
  functions?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      functions: 'Functions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      functions: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

