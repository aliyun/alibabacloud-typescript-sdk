// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNotifyTemplateListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The body of the template.
   * 
   * @example
   * Dear $aliyunUID : Cloud Security Center Threat Analysis and Response has detected a newly discovered security incident $incidentName(Incident id :$incidentID) in $startTime, Please go to Cloud Security Center Console View.
   */
  content?: string;
  /**
   * @remarks
   * The ID of the message event corresponding to the template.
   * 
   * @example
   * yundun_soar_incident_generate
   */
  eventId?: string;
  /**
   * @remarks
   * The parameters of the template.
   * 
   * @example
   * [\\"aliyunUID\\",\\"incidentName\\",\\"incidentID\\",\\"startTime\\"]
   */
  params?: string;
  /**
   * @remarks
   * The title of the template.
   * 
   * @example
   * [Alibaba Cloud Threat Analysis and Response] has detected a newly discovered security incident $incidentName($incidentID)
   */
  subject?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * incident generate
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      eventId: 'EventId',
      params: 'Params',
      subject: 'Subject',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      eventId: 'string',
      params: 'string',
      subject: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotifyTemplateListResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotifyTemplateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeNotifyTemplateListResponseBodyData[];
  /**
   * @remarks
   * The pagination information.
   */
  page?: DescribeNotifyTemplateListResponseBodyPage;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B3FED5B9-190A-5952-93A4-24FBF0F0C573
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      page: 'Page',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeNotifyTemplateListResponseBodyData },
      page: DescribeNotifyTemplateListResponseBodyPage,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

