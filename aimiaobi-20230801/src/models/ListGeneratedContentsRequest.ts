// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGeneratedContentsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * media
   */
  contentDomain?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  endTime?: string;
  query?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  startTime?: string;
  taskId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      contentDomain: 'ContentDomain',
      current: 'Current',
      endTime: 'EndTime',
      query: 'Query',
      size: 'Size',
      startTime: 'StartTime',
      taskId: 'TaskId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      contentDomain: 'string',
      current: 'number',
      endTime: 'string',
      query: 'string',
      size: 'number',
      startTime: 'string',
      taskId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

