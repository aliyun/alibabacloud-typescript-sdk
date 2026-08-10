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
   * The label name.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * xxx
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
   * xxxx
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
   * The application name.
   * 
   * @example
   * appxxx
   */
  appName?: string;
  /**
   * @remarks
   * The application channel.
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
   * The backend-assigned ID that uniquely identifies a request. You can use this ID for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The trace ID used to correlate and track alert events.
   * 
   * @example
   * 0abb7ee117615311812886711e0a15
   */
  traceId?: string;
  /**
   * @remarks
   * The alert time.
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

