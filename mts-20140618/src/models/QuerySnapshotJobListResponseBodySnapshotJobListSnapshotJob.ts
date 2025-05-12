// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobInput } from "./QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobInput";
import { QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobMNSMessageResult } from "./QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobMnsmessageResult";
import { QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfig } from "./QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfig";


export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJob extends $dara.Model {
  /**
   * @remarks
   * You can call this operation to query up to 10 snapshot jobs at a time.
   * 
   * 
   * ## Limits on QPS
   * 
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limit](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1
   */
  count?: string;
  /**
   * @remarks
   * The stride of a single image.
   * 
   * @example
   * 2021-06-30T12:34:29Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The OSS output file of the tiling job.
   * 
   * @example
   * cc6cbef8e8d5481ca536f5d2a466****
   */
  id?: string;
  /**
   * @remarks
   * The number of snapshots that are contained in the tiled image.
   */
  input?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobInput;
  /**
   * @remarks
   * The OSS object that is used as the input file.
   */
  MNSMessageResult?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobMNSMessageResult;
  /**
   * @remarks
   * The ARN of the specified RAM role. Format: acs:ram::$accountID:role/$roleName.
   * 
   * @example
   * The resource operated InputFile is bad
   */
  message?: string;
  /**
   * @remarks
   * The start time for taking snapshots. Unit: milliseconds.
   * 
   * @example
   * b11c171cced04565b1f38f1ecc39****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The height of a single image. The default value is the height of the output snapshot.
   */
  snapshotConfig?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfig;
  /**
   * @remarks
   * The information about the job input.
   * 
   * @example
   * Snapshoting
   */
  state?: string;
  /**
   * @remarks
   * The snapshot job IDs that do not exist. This parameter is not returned if all specified snapshot jobs are found.
   * 
   * @example
   * 7
   */
  tileCount?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of the query results. The value is a 32-bit UUID. If the returned query results cannot be displayed within one page, this parameter is returned. The value of this parameter is updated for each query.
   * 
   * @example
   * testid-001
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      creationTime: 'CreationTime',
      id: 'Id',
      input: 'Input',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      pipelineId: 'PipelineId',
      snapshotConfig: 'SnapshotConfig',
      state: 'State',
      tileCount: 'TileCount',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'string',
      creationTime: 'string',
      id: 'string',
      input: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobInput,
      MNSMessageResult: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobMNSMessageResult,
      message: 'string',
      pipelineId: 'string',
      snapshotConfig: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfig,
      state: 'string',
      tileCount: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.MNSMessageResult && typeof (this.MNSMessageResult as any).validate === 'function') {
      (this.MNSMessageResult as any).validate();
    }
    if(this.snapshotConfig && typeof (this.snapshotConfig as any).validate === 'function') {
      (this.snapshotConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

