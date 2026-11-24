// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListForwardStrategiesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query. Valid values: 1 to 10000.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The IDs of the access destination instances.
   */
  destinationIds?: string[];
  /**
   * @remarks
   * The destination type. Valid values:
   * - **Connector**: Connector.
   * 
   * @example
   * Connector
   */
  destinationType?: string;
  /**
   * @remarks
   * The IDs of the forwarding rules.
   */
  forwardIds?: string[];
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * acs_rand_str_acs
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Valid values: 1 to 1000.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      destinationIds: 'DestinationIds',
      destinationType: 'DestinationType',
      forwardIds: 'ForwardIds',
      name: 'Name',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      destinationIds: { 'type': 'array', 'itemType': 'string' },
      destinationType: 'string',
      forwardIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.destinationIds)) {
      $dara.Model.validateArray(this.destinationIds);
    }
    if(Array.isArray(this.forwardIds)) {
      $dara.Model.validateArray(this.forwardIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

