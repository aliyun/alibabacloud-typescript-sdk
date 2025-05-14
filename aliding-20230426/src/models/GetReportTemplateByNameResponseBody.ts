// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetReportTemplateByNameResponseBodyDefaultReceivedConvs } from "./GetReportTemplateByNameResponseBodyDefaultReceivedConvs";
import { GetReportTemplateByNameResponseBodyDefaultReceivers } from "./GetReportTemplateByNameResponseBodyDefaultReceivers";
import { GetReportTemplateByNameResponseBodyFields } from "./GetReportTemplateByNameResponseBodyFields";


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

