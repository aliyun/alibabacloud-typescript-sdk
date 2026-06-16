// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReleaseVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the version.
   * 
   * @example
   * stable
   */
  releaseType?: string;
  /**
   * @remarks
   * The EMR Serverless Spark version.
   * 
   * @example
   * esr-2.1 (Spark 3.3.1, Scala 2.12, Java Runtime)
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The status of the version.
   * 
   * @example
   * ONLINE
   */
  releaseVersionStatus?: string;
  serviceFilter?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-d2d82aa09155****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      releaseType: 'releaseType',
      releaseVersion: 'releaseVersion',
      releaseVersionStatus: 'releaseVersionStatus',
      serviceFilter: 'serviceFilter',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      releaseType: 'string',
      releaseVersion: 'string',
      releaseVersionStatus: 'string',
      serviceFilter: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

