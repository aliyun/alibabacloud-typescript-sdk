// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenAckServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The type of service that you want to activate. Valid values:
   * 
   * *   `propayasgo`: ACK clusters (including ACK managed clusters and ACK dedicated clusters), ACK Serverless clusters, and registered clusters.
   * *   `edgepayasgo`: ACK Edge clusters.
   * 
   * @example
   * propayasgo
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

