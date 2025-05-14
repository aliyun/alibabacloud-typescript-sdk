// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdgeMachinesRequest extends $dara.Model {
  /**
   * @remarks
   * The `hostname` of the cloud-native box.
   * 
   * @example
   * ack-v-b010-ssdfw****
   */
  hostname?: string;
  /**
   * @remarks
   * The lifecycle status.
   * 
   * @example
   * activated/waitOnline/deleting
   */
  lifeState?: string;
  /**
   * @remarks
   * The type of cloud-native box.
   * 
   * @example
   * ACK-V-B010
   */
  model?: string;
  /**
   * @remarks
   * The status of the cloud-native box. Valid values:
   * 
   * *   `offline`
   * *   `online`
   * 
   * @example
   * offline/online
   */
  onlineState?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      hostname: 'hostname',
      lifeState: 'life_state',
      model: 'model',
      onlineState: 'online_state',
      pageNumber: 'page_number',
      pageSize: 'page_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      lifeState: 'string',
      model: 'string',
      onlineState: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

