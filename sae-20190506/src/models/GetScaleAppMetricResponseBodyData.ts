// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScaleAppMetricResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The maximum number of instances.
   * 
   * @example
   * 10
   */
  maxReplicas?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The current number of instances.
   * 
   * @example
   * 10
   */
  runnings?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      maxReplicas: 'MaxReplicas',
      name: 'Name',
      regionId: 'RegionId',
      runnings: 'Runnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      maxReplicas: 'number',
      name: 'string',
      regionId: 'string',
      runnings: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

