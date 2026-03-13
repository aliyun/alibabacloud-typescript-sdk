// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventSinkConfig } from "./EventSinkConfig";
import { EventSourceConfig } from "./EventSourceConfig";
import { RunOptions } from "./RunOptions";


export class EventBridgeTriggerConfig extends $dara.Model {
  /**
   * @remarks
   * Whether to invoke the function in asynchronous mode. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  The default value is **false**.
   * 
   * @example
   * true
   */
  asyncInvocationType?: boolean;
  /**
   * @remarks
   * The event pattern. The value is in the JSON format. For more information, see [Event patterns](https://help.aliyun.com/document_detail/181432.html).
   * 
   * @example
   * {}
   */
  eventRuleFilterPattern?: string;
  /**
   * @remarks
   * The event destination configurations.
   */
  eventSinkConfig?: EventSinkConfig;
  /**
   * @remarks
   * The event source configurations.
   */
  eventSourceConfig?: EventSourceConfig;
  /**
   * @remarks
   * The runtime configurations.
   */
  runOptions?: RunOptions;
  /**
   * @remarks
   * Whether to enable the trigger. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  The default value is **true**.
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

