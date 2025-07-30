// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobConfigResponseBodyParameters extends $dara.Model {
  checkingCode?: string;
  defaultValue?: string;
  description?: string;
  forceRestart?: string;
  modifiable?: string;
  module?: string;
  name?: string;
  recommendValue?: string;
  runningValue?: string;
  valueType?: number;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      defaultValue: 'DefaultValue',
      description: 'Description',
      forceRestart: 'ForceRestart',
      modifiable: 'Modifiable',
      module: 'Module',
      name: 'Name',
      recommendValue: 'RecommendValue',
      runningValue: 'RunningValue',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      defaultValue: 'string',
      description: 'string',
      forceRestart: 'string',
      modifiable: 'string',
      module: 'string',
      name: 'string',
      recommendValue: 'string',
      runningValue: 'string',
      valueType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobConfigResponseBody extends $dara.Model {
  parameters?: DescribeDtsJobConfigResponseBodyParameters[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': DescribeDtsJobConfigResponseBodyParameters },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

