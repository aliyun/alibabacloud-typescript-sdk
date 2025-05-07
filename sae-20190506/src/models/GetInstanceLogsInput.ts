// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceLogsInput extends $dara.Model {
  backwardLine?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  forwardLine?: number;
  isTail?: boolean;
  match?: string;
  message?: string;
  offset?: number;
  packID?: string;
  packMeta?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  timestamp?: string;
  versionID?: string;
  static names(): { [key: string]: string } {
    return {
      backwardLine: 'backwardLine',
      endTime: 'endTime',
      forwardLine: 'forwardLine',
      isTail: 'isTail',
      match: 'match',
      message: 'message',
      offset: 'offset',
      packID: 'packID',
      packMeta: 'packMeta',
      startTime: 'startTime',
      timestamp: 'timestamp',
      versionID: 'versionID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backwardLine: 'number',
      endTime: 'number',
      forwardLine: 'number',
      isTail: 'boolean',
      match: 'string',
      message: 'string',
      offset: 'number',
      packID: 'string',
      packMeta: 'string',
      startTime: 'number',
      timestamp: 'string',
      versionID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

