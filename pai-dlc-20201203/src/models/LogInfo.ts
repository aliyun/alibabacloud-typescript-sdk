// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogInfo extends $dara.Model {
  content?: string;
  id?: string;
  isTruncated?: boolean;
  podId?: string;
  podUid?: string;
  /**
   * @example
   * stderr, stdout
   */
  source?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      isTruncated: 'IsTruncated',
      podId: 'PodId',
      podUid: 'PodUid',
      source: 'Source',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'string',
      isTruncated: 'boolean',
      podId: 'string',
      podUid: 'string',
      source: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

