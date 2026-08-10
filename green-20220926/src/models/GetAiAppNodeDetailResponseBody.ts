// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiAppNodeDetailResponseBodyEventDataLabels extends $dara.Model {
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
   * porn desc
   */
  labelDesc?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      labelDesc: 'LabelDesc',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      labelDesc: 'string',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiAppNodeDetailResponseBodyEventData extends $dara.Model {
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * bailian
   */
  channel?: string;
  /**
   * @remarks
   * The list of labels.
   */
  labels?: GetAiAppNodeDetailResponseBodyEventDataLabels[];
  /**
   * @remarks
   * The name.
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The time when the event occurred.
   * 
   * @example
   * 2026-01-01 16:08:38
   */
  time?: string;
  /**
   * @remarks
   * The trace ID, which is used to query the exact call information.
   * 
   * @example
   * xxxxx
   */
  traceId?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * hit_sensitive_data
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      labels: 'Labels',
      name: 'Name',
      riskLevel: 'RiskLevel',
      time: 'Time',
      traceId: 'TraceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      labels: { 'type': 'array', 'itemType': GetAiAppNodeDetailResponseBodyEventDataLabels },
      name: 'string',
      riskLevel: 'string',
      time: 'string',
      traceId: 'string',
      type: 'string',
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

export class GetAiAppNodeDetailResponseBody extends $dara.Model {
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
   * The channel information.
   * 
   * @example
   * bailian
   */
  channel?: string;
  /**
   * @remarks
   * The list of event data.
   */
  eventData?: GetAiAppNodeDetailResponseBodyEventData[];
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * node-xxx
   */
  nodeId?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * namexxx
   */
  nodeName?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * TOOL
   */
  nodeType?: string;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channel: 'Channel',
      eventData: 'EventData',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
      requestId: 'RequestId',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channel: 'string',
      eventData: { 'type': 'array', 'itemType': GetAiAppNodeDetailResponseBodyEventData },
      nodeId: 'string',
      nodeName: 'string',
      nodeType: 'string',
      requestId: 'string',
      riskLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventData)) {
      $dara.Model.validateArray(this.eventData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

