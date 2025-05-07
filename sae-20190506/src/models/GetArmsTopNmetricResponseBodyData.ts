// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArmsTopNMetricResponseBodyData extends $dara.Model {
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
   * The total number of requests.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The number of errors.
   * 
   * @example
   * 0
   */
  error?: number;
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
   * The average response time. Unit: milliseconds.
   * 
   * @example
   * 100
   */
  rt?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      count: 'Count',
      error: 'Error',
      name: 'Name',
      regionId: 'RegionId',
      rt: 'Rt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      count: 'number',
      error: 'number',
      name: 'string',
      regionId: 'string',
      rt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

