// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAtiCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate to query. Call the ListAtiCertificates operation to query the target certificate information and obtain the ID from the response.
   * 
   * @example
   * 2074041094504542210
   */
  agentCertificateId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a parameter value from your client to ensure that the value is unique among different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cC.....
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentCertificateId: 'AgentCertificateId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCertificateId: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

