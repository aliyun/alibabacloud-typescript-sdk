// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReportTemplateByNameResponseBodyDefaultReceivedConvs extends $dara.Model {
  /**
   * @example
   * cid12334##2341
   */
  conversationId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReportTemplateByNameResponseBodyDefaultReceivers extends $dara.Model {
  userName?: string;
  /**
   * @example
   * 1234
   */
  userid?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      userid: 'Userid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      userid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReportTemplateByNameResponseBodyFields extends $dara.Model {
  /**
   * @example
   * key1
   */
  fieldName?: string;
  /**
   * @example
   * 0
   */
  sort?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      sort: 'Sort',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      sort: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReportTemplateByNameResponseBody extends $dara.Model {
  defaultReceivedConvs?: GetReportTemplateByNameResponseBodyDefaultReceivedConvs[];
  defaultReceivers?: GetReportTemplateByNameResponseBodyDefaultReceivers[];
  fields?: GetReportTemplateByNameResponseBodyFields[];
  /**
   * @example
   * 11111
   */
  id?: string;
  name?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  userName?: string;
  /**
   * @example
   * 1234
   */
  userid?: string;
  static names(): { [key: string]: string } {
    return {
      defaultReceivedConvs: 'defaultReceivedConvs',
      defaultReceivers: 'defaultReceivers',
      fields: 'fields',
      id: 'id',
      name: 'name',
      requestId: 'requestId',
      userName: 'userName',
      userid: 'userid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultReceivedConvs: { 'type': 'array', 'itemType': GetReportTemplateByNameResponseBodyDefaultReceivedConvs },
      defaultReceivers: { 'type': 'array', 'itemType': GetReportTemplateByNameResponseBodyDefaultReceivers },
      fields: { 'type': 'array', 'itemType': GetReportTemplateByNameResponseBodyFields },
      id: 'string',
      name: 'string',
      requestId: 'string',
      userName: 'string',
      userid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.defaultReceivedConvs)) {
      $dara.Model.validateArray(this.defaultReceivedConvs);
    }
    if(Array.isArray(this.defaultReceivers)) {
      $dara.Model.validateArray(this.defaultReceivers);
    }
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

