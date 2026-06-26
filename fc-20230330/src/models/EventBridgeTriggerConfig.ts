// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventSinkConfig } from "./EventSinkConfig";
import { EventSourceConfig } from "./EventSourceConfig";
import { RunOptions } from "./RunOptions";


export class EventBridgeTriggerConfig extends $dara.Model {
  /**
   * @remarks
   * The method used by the trigger to invoke the function. Valid values:
   * 
   * - **true**: synchronous call.
   * 
   * - **false**: asynchronous invocation.
   * 
   * > Default value: **false**
   * 
   * @example
   * true
   */
  asyncInvocationType?: boolean;
  /**
   * @remarks
   * Event pattern. Use JSON format. For detailed rules, see [event pattern](https://help.aliyun.com/document_detail/181432.html).
   * 
   * @example
   * {}
   */
  eventRuleFilterPattern?: string;
  /**
   * @remarks
   * Event target configuration
   */
  eventSinkConfig?: EventSinkConfig;
  /**
   * @remarks
   * Event source configuration.
   */
  eventSourceConfig?: EventSourceConfig;
  /**
   * @remarks
   * Environment parameter configuration
   */
  runOptions?: RunOptions;
  /**
   * @remarks
   * Whether to enable the trigger. Valid values:
   * 
   * - **true**: enable the trigger.
   * 
   * - **false**: disable the trigger.
   * 
   * > Default value: **true**
   * 
   * @example
   * true
   */
  triggerEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      asyncInvocationType: 'asyncInvocationType',
      eventRuleFilterPattern: 'eventRuleFilterPattern',
      eventSinkConfig: 'eventSinkConfig',
      eventSourceConfig: 'eventSourceConfig',
      runOptions: 'runOptions',
      triggerEnable: 'triggerEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncInvocationType: 'boolean',
      eventRuleFilterPattern: 'string',
      eventSinkConfig: EventSinkConfig,
      eventSourceConfig: EventSourceConfig,
      runOptions: RunOptions,
      triggerEnable: 'boolean',
    };
  }

  validate() {
    if(this.eventSinkConfig && typeof (this.eventSinkConfig as any).validate === 'function') {
      (this.eventSinkConfig as any).validate();
    }
    if(this.eventSourceConfig && typeof (this.eventSourceConfig as any).validate === 'function') {
      (this.eventSourceConfig as any).validate();
    }
    if(this.runOptions && typeof (this.runOptions as any).validate === 'function') {
      (this.runOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

