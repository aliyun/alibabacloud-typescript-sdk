// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTicketInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ticket.
   * 
   * @example
   * a27a9aec-****-****-bd40-1a21ea41d7c5
   */
  accessTicket?: string;
  /**
   * @remarks
   * The component ID in the report.
   * 
   * @example
   * sfdgsds-****-****-a608-mghdgd
   */
  cmptId?: string;
  /**
   * @remarks
   * The global parameters.
   * 
   * @example
   * [{&quot;paramKey&quot;:&quot;price&quot;,&quot;joinType&quot;:&quot;and&quot;,&quot;conditionList&quot;:[{&quot;operate&quot;:&quot;&gt;&quot;,&quot;value&quot;:&quot;0&quot;}]},{&quot;paramKey&quot;:&quot;product_type&quot;,&quot;joinType&quot;:&quot;and&quot;,&quot;conditionList&quot;:[{&quot;operate&quot;:&quot;in&quot;,&quot;value&quot;:[&quot;]}]}]\\n
   */
  globalParam?: string;
  /**
   * @remarks
   * The expiration time of the ticket.
   * 
   * @example
   * 2022-01-30 03:03:49
   */
  invalidTime?: string;
  /**
   * @remarks
   * The maximum number of supported tickets.
   * 
   * @example
   * 9999
   */
  maxTicketNum?: number;
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * 2fe4fbd8-****-****-b3e1-e92c7af083ea
   */
  organizationId?: string;
  /**
   * @remarks
   * The registration time of the ticket.
   * 
   * @example
   * 2022-01-09 22:23:49
   */
  registerTime?: string;
  /**
   * @remarks
   * The number of consumed tickets.
   * 
   * @example
   * 47
   */
  usedTicketNum?: number;
  /**
   * @remarks
   * The Quick BI user ID.
   * 
   * @example
   * 974e50**********9033f46
   */
  userId?: string;
  /**
   * @remarks
   * The watermark parameters.
   * 
   * @example
   * ticket
   */
  watermarkParam?: string;
  /**
   * @remarks
   * The report ID.
   * 
   * @example
   * ccd3428c-****-****-a608-26bae29dffee
   */
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      accessTicket: 'AccessTicket',
      cmptId: 'CmptId',
      globalParam: 'GlobalParam',
      invalidTime: 'InvalidTime',
      maxTicketNum: 'MaxTicketNum',
      organizationId: 'OrganizationId',
      registerTime: 'RegisterTime',
      usedTicketNum: 'UsedTicketNum',
      userId: 'UserId',
      watermarkParam: 'WatermarkParam',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTicket: 'string',
      cmptId: 'string',
      globalParam: 'string',
      invalidTime: 'string',
      maxTicketNum: 'number',
      organizationId: 'string',
      registerTime: 'string',
      usedTicketNum: 'number',
      userId: 'string',
      watermarkParam: 'string',
      worksId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the generated ticket.
   */
  result?: QueryTicketInfoResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - true: The request is successful.
   * - false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryTicketInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

