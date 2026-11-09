// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCustomAuthIdentityResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * The client ID of the device when the identity type is CLIENT.
   * 
   * @example
   * GID_ICP@@@4d378084
   */
  clientId?: string;
  /**
   * @remarks
   * The identity type.
   * 
   * - USER: Username only.
   * 
   * - CLIENT: Specific to a client.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The secret key.
   * 
   * @example
   * 62a5916d71767185b48907d85c2efa****
   */
  secret?: string;
  /**
   * @remarks
   * The signature verification mode. ORIGIN: Original value comparison, which compares the password with the secret. SIGNED: The HmacSHA1 signature is calculated for the clientId using the secret for verification, and then the password is compared.
   * 
   * @example
   * SIGNED
   */
  signMode?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      identityType: 'IdentityType',
      secret: 'Secret',
      signMode: 'SignMode',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      identityType: 'string',
      secret: 'string',
      signMode: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthIdentityResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * If more results are available, a NextToken is returned.
   * 
   * @example
   * AAAAAXA+GzVqTutYpgkFjBrchKzuvSbpuTqtt6OF9tsC9QnJ
   */
  nextToken?: string;
  /**
   * @remarks
   * The returned data.
   */
  results?: QueryCustomAuthIdentityResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      results: { 'type': 'array', 'itemType': QueryCustomAuthIdentityResponseBodyDataResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthIdentityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. 200: The request is successful. Other codes indicate errors. For more information about error codes, see Error codes.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The query result.
   */
  data?: QueryCustomAuthIdentityResponseBodyData;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 11568B5B-13A8-4E72-9DBA-3A14F7D3****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. true: The request is successful. false: The request failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: QueryCustomAuthIdentityResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

