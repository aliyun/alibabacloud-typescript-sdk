// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertTemplatesResponseBodyAlertTemplatesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions extends $dara.Model {
  key?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
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

export class ListAlertTemplatesResponseBodyAlertTemplatesLabelMatchExpressionGridLabelMatchExpressionGroups extends $dara.Model {
  labelMatchExpressions?: ListAlertTemplatesResponseBodyAlertTemplatesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions[];
  static names(): { [key: string]: string } {
    return {
      labelMatchExpressions: 'LabelMatchExpressions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMatchExpressions: { 'type': 'array', 'itemType': ListAlertTemplatesResponseBodyAlertTemplatesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions },
    };
  }

  validate() {
    if(Array.isArray(this.labelMatchExpressions)) {
      $dara.Model.validateArray(this.labelMatchExpressions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertTemplatesResponseBodyAlertTemplatesLabelMatchExpressionGrid extends $dara.Model {
  labelMatchExpressionGroups?: ListAlertTemplatesResponseBodyAlertTemplatesLabelMatchExpressionGridLabelMatchExpressionGroups[];
  static names(): { [key: string]: string } {
    return {
      labelMatchExpressionGroups: 'LabelMatchExpressionGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMatchExpressionGroups: { 'type': 'array', 'itemType': ListAlertTemplatesResponseBodyAlertTemplatesLabelMatchExpressionGridLabelMatchExpressionGroups },
    };
  }

  validate() {
    if(Array.isArray(this.labelMatchExpressionGroups)) {
      $dara.Model.validateArray(this.labelMatchExpressionGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertTemplatesResponseBodyAlertTemplates extends $dara.Model {
  alertProvider?: string;
  annotations?: { [key: string]: any };
  id?: number;
  labelMatchExpressionGrid?: ListAlertTemplatesResponseBodyAlertTemplatesLabelMatchExpressionGrid;
  labels?: { [key: string]: any };
  message?: string;
  name?: string;
  parentId?: number;
  public?: boolean;
  rule?: string;
  status?: boolean;
  templateProvider?: string;
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      alertProvider: 'AlertProvider',
      annotations: 'Annotations',
      id: 'Id',
      labelMatchExpressionGrid: 'LabelMatchExpressionGrid',
      labels: 'Labels',
      message: 'Message',
      name: 'Name',
      parentId: 'ParentId',
      public: 'Public',
      rule: 'Rule',
      status: 'Status',
      templateProvider: 'TemplateProvider',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertProvider: 'string',
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'number',
      labelMatchExpressionGrid: ListAlertTemplatesResponseBodyAlertTemplatesLabelMatchExpressionGrid,
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      name: 'string',
      parentId: 'number',
      public: 'boolean',
      rule: 'string',
      status: 'boolean',
      templateProvider: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.annotations) {
      $dara.Model.validateMap(this.annotations);
    }
    if(this.labelMatchExpressionGrid && typeof (this.labelMatchExpressionGrid as any).validate === 'function') {
      (this.labelMatchExpressionGrid as any).validate();
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertTemplatesResponseBody extends $dara.Model {
  alertTemplates?: ListAlertTemplatesResponseBodyAlertTemplates[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertTemplates: 'AlertTemplates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplates: { 'type': 'array', 'itemType': ListAlertTemplatesResponseBodyAlertTemplates },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertTemplates)) {
      $dara.Model.validateArray(this.alertTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

