// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiAppTraceDetailResponseBodyLabels extends $dara.Model {
  /**
   * @remarks
   * The count.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The name of the label.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The description of the label.
   * 
   * @example
   * Politically sensitive content
   */
  labelDesc?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * sensitiveData
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
      labelDesc: 'LabelDesc',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
      labelDesc: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiAppTraceDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AI analysis result.
   * 
   * @example
   * This request triggered a politically sensitive content risk. The model confidence is high. Manual review is recommended
   */
  analysis?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * id-xxx
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * appxxx
   */
  appName?: string;
  /**
   * @remarks
   * The channel of the application.
   * 
   * @example
   * bailian
   */
  channel?: string;
  /**
   * @remarks
   * The list of labels.
   */
  labels?: GetAiAppTraceDetailResponseBodyLabels[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * 0abb7ee117615311812886711e0a15
   */
  traceId?: string;
  /**
   * @remarks
   * The time when the alert was triggered. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2026-01-01 16:08:38
   */
  warningTime?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      appId: 'AppId',
      appName: 'AppName',
      channel: 'Channel',
      labels: 'Labels',
      requestId: 'RequestId',
      traceId: 'TraceId',
      warningTime: 'WarningTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: 'string',
      appId: 'string',
      appName: 'string',
      channel: 'string',
      labels: { 'type': 'array', 'itemType': GetAiAppTraceDetailResponseBodyLabels },
      requestId: 'string',
      traceId: 'string',
      warningTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

