// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMonitorResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The prefix of the name.
   * 
   * @example
   * mse-xxxx-xxxxxx
   */
  clusterNamePrefix?: string;
  /**
   * @remarks
   * The name of the pod.
   * 
   * @example
   * mse-xxxxxx-xxxxxx-reg-center-0-0
   */
  podName?: string;
  /**
   * @remarks
   * The details of the data.
   */
  values?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      clusterNamePrefix: 'clusterNamePrefix',
      podName: 'podName',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNamePrefix: 'string',
      podName: 'string',
      values: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

