// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAggregatorsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-9190626622af00a9****
   */
  aggregatorIds?: string;
  /**
   * @remarks
   * The client token that you want to use to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorIds: 'AggregatorIds',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorIds: 'string',
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

