// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSimilarEventScenariosRequest extends $dara.Model {
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the alert event.
   * >You can call the [DescribeSuspEvents](~~DescribeSuspEvents~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 12321
   */
  securityEventId?: number;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 112.214.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      securityEventId: 'SecurityEventId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      securityEventId: 'number',
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

