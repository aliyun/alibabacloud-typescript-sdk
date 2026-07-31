// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySelectOptionsResponseBodySelectOptionsChildren extends $dara.Model {
  bizConfig?: { [key: string]: any };
  category?: string;
  description?: string;
  label?: string;
  tags?: string[];
  value?: string;
  static names(): { [key: string]: string } {
    return {
      bizConfig: 'BizConfig',
      category: 'Category',
      description: 'Description',
      label: 'Label',
      tags: 'Tags',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      category: 'string',
      description: 'string',
      label: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      value: 'string',
    };
  }

  validate() {
    if(this.bizConfig) {
      $dara.Model.validateMap(this.bizConfig);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySelectOptionsResponseBodySelectOptions extends $dara.Model {
  bizConfig?: { [key: string]: any };
  category?: string;
  children?: QuerySelectOptionsResponseBodySelectOptionsChildren[];
  description?: string;
  label?: string;
  tags?: string[];
  value?: string;
  static names(): { [key: string]: string } {
    return {
      bizConfig: 'BizConfig',
      category: 'Category',
      children: 'Children',
      description: 'Description',
      label: 'Label',
      tags: 'Tags',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      category: 'string',
      children: { 'type': 'array', 'itemType': QuerySelectOptionsResponseBodySelectOptionsChildren },
      description: 'string',
      label: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      value: 'string',
    };
  }

  validate() {
    if(this.bizConfig) {
      $dara.Model.validateMap(this.bizConfig);
    }
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySelectOptionsResponseBody extends $dara.Model {
  requestId?: string;
  selectOptions?: QuerySelectOptionsResponseBodySelectOptions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      selectOptions: 'SelectOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      selectOptions: { 'type': 'array', 'itemType': QuerySelectOptionsResponseBodySelectOptions },
    };
  }

  validate() {
    if(Array.isArray(this.selectOptions)) {
      $dara.Model.validateArray(this.selectOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

