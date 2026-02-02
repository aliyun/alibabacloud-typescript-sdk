// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkMQTTParametersMqtt5UserProperty extends $dara.Model {
  form?: string;
  template?: string;
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
  form?: string;
  template?: string;
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
  form?: string;
  template?: string;
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
  instanceId?: string;
  mqtt5UserProperty?: SinkMQTTParametersMqtt5UserProperty;
  parentTopic?: string;
  payload?: SinkMQTTParametersPayload;
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

