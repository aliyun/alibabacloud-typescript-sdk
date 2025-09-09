// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecursionRecordRequest extends $dara.Model {
  /**
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @example
   * 5
   */
  priority?: number;
  /**
   * @example
   * 9*******
   */
  recordId?: string;
  /**
   * @example
   * WebSDK
   */
  requestSource?: string;
  /**
   * @example
   * test
   */
  rr?: string;
  /**
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @example
   * A
   */
  type?: string;
  /**
   * @example
   * 1.1.XX.XX
   */
  value?: string;
  /**
   * @example
   * 2
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      priority: 'Priority',
      recordId: 'RecordId',
      requestSource: 'RequestSource',
      rr: 'Rr',
      ttl: 'Ttl',
      type: 'Type',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      priority: 'number',
      recordId: 'string',
      requestSource: 'string',
      rr: 'string',
      ttl: 'number',
      type: 'string',
      value: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

