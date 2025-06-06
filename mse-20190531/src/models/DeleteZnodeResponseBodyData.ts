// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteZnodeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data of the node.
   * 
   * @example
   * cluster
   */
  data?: string;
  /**
   * @remarks
   * Indicates whether the node information was returned. Valid values:
   * 
   * *   `true`: The node information was returned.
   * *   `false`: The node information failed to be returned.
   * 
   * @example
   * true
   */
  dir?: boolean;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * mse-bc1a29b0-160230875****-reg-center-0-1
   */
  name?: string;
  /**
   * @remarks
   * The path of the node.
   * 
   * @example
   * /
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dir: 'Dir',
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      dir: 'boolean',
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

