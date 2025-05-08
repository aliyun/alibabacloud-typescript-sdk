// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySlbSpecResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the returned data.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The maximum number of connections.
   * 
   * @example
   * 50,000
   */
  maxConnection?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * Standard I
   */
  name?: string;
  /**
   * @remarks
   * The number of connections per second.
   * 
   * @example
   * 50,000
   */
  newConnectionPerSecond?: string;
  /**
   * @remarks
   * The number of queries per second (QPS).
   * 
   * @example
   * 50,000
   */
  qps?: string;
  /**
   * @remarks
   * The specification of the instance.
   * 
   * @example
   * slb.s2.small
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      maxConnection: 'MaxConnection',
      name: 'Name',
      newConnectionPerSecond: 'NewConnectionPerSecond',
      qps: 'Qps',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      maxConnection: 'string',
      name: 'string',
      newConnectionPerSecond: 'string',
      qps: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

