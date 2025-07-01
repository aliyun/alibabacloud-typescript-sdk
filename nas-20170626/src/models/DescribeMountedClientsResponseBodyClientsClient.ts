// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMountedClientsResponseBodyClientsClient extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 10.10.10.1
   */
  clientIP?: string;
  static names(): { [key: string]: string } {
    return {
      clientIP: 'ClientIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIP: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

