// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVisitorChatMessagesRequest extends $dara.Model {
  /**
   * @example
   * cf584733-***-***-9699-cb77aa3b7aa6
   */
  accessChannelId?: string;
  /**
   * @example
   * 9XYGTGWtq2wXzVikKuip_zeVGl6O4VJ-l-*-*-JPofhap4P7fAevuE=
   */
  accessToken?: string;
  /**
   * @example
   * 1650316799000
   */
  endTime?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 1737193352340::7463707254.EAUNIT
   */
  nextPageToken?: string;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * DESC
   */
  sortOrder?: string;
  /**
   * @example
   * 1647325450000
   */
  startTime?: number;
  /**
   * @example
   * fcd020fe-****-1a272a174a7d
   */
  visitorId?: string;
  static names(): { [key: string]: string } {
    return {
      accessChannelId: 'AccessChannelId',
      accessToken: 'AccessToken',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      sortOrder: 'SortOrder',
      startTime: 'StartTime',
      visitorId: 'VisitorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelId: 'string',
      accessToken: 'string',
      endTime: 'string',
      instanceId: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
      sortOrder: 'string',
      startTime: 'number',
      visitorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

