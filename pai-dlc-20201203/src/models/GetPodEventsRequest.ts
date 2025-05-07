// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPodEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time (UTC).
   * 
   * @example
   * 2020-11-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of events that can be returned.
   * 
   * @example
   * 100
   */
  maxEventsNum?: number;
  /**
   * @remarks
   * The node UID. Call [GetJob](https://help.aliyun.com/document_detail/459677.html) to get the node UID.
   * 
   * @example
   * dlc-20210126170216-*****-chief-0
   */
  podUid?: string;
  /**
   * @remarks
   * The start time (UTC).
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      maxEventsNum: 'MaxEventsNum',
      podUid: 'PodUid',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxEventsNum: 'number',
      podUid: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

