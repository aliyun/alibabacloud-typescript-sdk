// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCopilotConversationRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The model identifier.
   * 
   * @example
   * qwen3.7-max
   */
  model?: string;
  /**
   * @remarks
   * The planning configuration.
   * 
   * @example
   * enabled
   */
  planMode?: string;
  /**
   * @remarks
   * The security project ID.
   * 
   * @example
   * project-incident-****
   */
  projectId?: string;
  /**
   * @remarks
   * The region of the data management center for threat analysis. Specify the management center region based on the region where your assets reside. Valid values:
   * - cn-hangzhou: Your assets reside in the Chinese mainland.
   * - ap-southeast-1: Your assets reside in regions outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The deep thinking configuration.
   * 
   * @example
   * enabled
   */
  thinkingMode?: string;
  /**
   * @remarks
   * The conversation title.
   * 
   * @example
   * Security incident investigation
   */
  title?: string;
  /**
   * @remarks
   * The trace ID of the created span object.
   * 
   * @example
   * 550e8400e29b41d4a71644665544****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      model: 'Model',
      planMode: 'PlanMode',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      thinkingMode: 'ThinkingMode',
      title: 'Title',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      model: 'string',
      planMode: 'string',
      projectId: 'string',
      regionId: 'string',
      thinkingMode: 'string',
      title: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

