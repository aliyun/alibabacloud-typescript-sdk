// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkMQTTParametersMqtt5UserProperty extends $dara.Model {
  /**
   * @remarks
   * The method used to generate the parameter value. Valid values: CONSTANT (constant), JSONPATH (extracted from event content), and TEMPLATE (template).
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template string used to format the parameter value. This parameter is used only when Form is set to TEMPLATE.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The source content of the parameter value specified by Form. When Form is set to CONSTANT, this value is the content.
   * 
   * @example
   * DEMO CONTENT
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SinkMQTTParametersPayload extends $dara.Model {
  /**
   * @remarks
   * The method used to generate the message content.
   * 
   * @example
   * ORIGINAL
   */
  form?: string;
  /**
   * @remarks
   * The template string used to format the parameter value. This parameter is used only when Form is set to TEMPLATE.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The source content of the parameter value specified by Form. When Form is set to CONSTANT, this value is the content.
   * 
   * @example
   * DEMO CONTENT
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SinkMQTTParametersSubTopic extends $dara.Model {
  /**
   * @remarks
   * The method used to generate the parameter value. Valid values: CONSTANT (constant), JSONPATH (extracted from event content), and TEMPLATE (template).
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template string used to format the parameter value. This parameter is used only when Form is set to TEMPLATE.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The source content of the parameter value specified by Form. When Form is set to CONSTANT, this value is the content.
   * 
   * @example
   * SUB-TOPIC
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SinkMQTTParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination MQTT instance.
   * 
   * @example
   * mqtt-cn-a1b2c3d4e5f
   */
  instanceId?: string;
  /**
   * @remarks
   * The user properties.
   */
  mqtt5UserProperty?: SinkMQTTParametersMqtt5UserProperty;
  /**
   * @remarks
   * The parent topic of the destination MQTT instance.
   * 
   * @example
   * example-topic
   */
  parentTopic?: string;
  /**
   * @remarks
   * The message payload.
   */
  payload?: SinkMQTTParametersPayload;
  /**
   * @remarks
   * The subtopic name.
   */
  subTopic?: SinkMQTTParametersSubTopic;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mqtt5UserProperty: 'Mqtt5UserProperty',
      parentTopic: 'ParentTopic',
      payload: 'Payload',
      subTopic: 'SubTopic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mqtt5UserProperty: SinkMQTTParametersMqtt5UserProperty,
      parentTopic: 'string',
      payload: SinkMQTTParametersPayload,
      subTopic: SinkMQTTParametersSubTopic,
    };
  }

  validate() {
    if(this.mqtt5UserProperty && typeof (this.mqtt5UserProperty as any).validate === 'function') {
      (this.mqtt5UserProperty as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    if(this.subTopic && typeof (this.subTopic as any).validate === 'function') {
      (this.subTopic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

