// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFeatureEntityResponseBody extends $dara.Model {
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * user_id
   */
  joinId?: string;
  /**
   * @example
   * feature_entity_1
   */
  name?: string;
  /**
   * @example
   * 123456789*****
   */
  owner?: string;
  /**
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @example
   * project_1
   */
  projectName?: string;
  /**
   * @example
   * E23EFF09-58AA-5420-934F-8453AE01548D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      joinId: 'JoinId',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      joinId: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      projectName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

