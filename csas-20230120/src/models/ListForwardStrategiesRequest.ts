// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListForwardStrategiesRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: string;
  destinationIds?: string[];
  /**
   * @example
   * Connector
   */
  destinationType?: string;
  forwardIds?: string[];
  /**
   * @example
   * acs_rand_str_acs
   */
  name?: string;
  /**
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

