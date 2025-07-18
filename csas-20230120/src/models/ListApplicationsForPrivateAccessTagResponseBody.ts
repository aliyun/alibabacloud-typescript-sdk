// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsForPrivateAccessTagResponseBodyTagsApplicationsPortRanges extends $dara.Model {
  /**
   * @example
   * 80
   */
  begin?: number;
  /**
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessTagResponseBodyTagsApplications extends $dara.Model {
  addresses?: string[];
  /**
   * @example
   * pa-application-7a9243dd02f4****
   */
  applicationId?: string;
  /**
   * @remarks
   * 内网访问应用创建时间。
   * 
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * private_access_application_name
   */
  name?: string;
  portRanges?: ListApplicationsForPrivateAccessTagResponseBodyTagsApplicationsPortRanges[];
  /**
   * @example
   * All
   */
  protocol?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      createTime: 'string',
      description: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessTagResponseBodyTagsApplicationsPortRanges },
      protocol: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessTagResponseBodyTags extends $dara.Model {
  applications?: ListApplicationsForPrivateAccessTagResponseBodyTagsApplications[];
  /**
   * @example
   * tag-7ffc82853476****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessTagResponseBodyTagsApplications },
      tagId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessTagResponseBody extends $dara.Model {
  /**
   * @example
   * B608C6AE-623D-55C4-9454-601B88AE937E
   */
  requestId?: string;
  tags?: ListApplicationsForPrivateAccessTagResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessTagResponseBodyTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

