// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateSubnetRequest extends $tea.Model {
  cidr?: string;
  name?: string;
  regionId?: string;
  type?: string;
  vpdId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      name: 'Name',
      regionId: 'RegionId',
      type: 'Type',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      name: 'string',
      regionId: 'string',
      type: 'string',
      vpdId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubnetResponseBody extends $tea.Model {
  code?: number;
  content?: CreateSubnetResponseBodyContent;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      content: CreateSubnetResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubnetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSubnetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSubnetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVccRequest extends $tea.Model {
  accessCouldService?: boolean;
  bgpCidr?: string;
  cenId?: string;
  description?: string;
  regionId?: string;
  vSwitchId?: string;
  vccId?: string;
  vpcId?: string;
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      accessCouldService: 'AccessCouldService',
      bgpCidr: 'BgpCidr',
      cenId: 'CenId',
      description: 'Description',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      vccId: 'VccId',
      vpcId: 'VpcId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCouldService: 'boolean',
      bgpCidr: 'string',
      cenId: 'string',
      description: 'string',
      regionId: 'string',
      vSwitchId: 'string',
      vccId: 'string',
      vpcId: 'string',
      vpdId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVccResponseBody extends $tea.Model {
  code?: number;
  content?: CreateVccResponseBodyContent;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      content: CreateVccResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVccResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateVccResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVccResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpdRequest extends $tea.Model {
  cidr?: string;
  name?: string;
  regionId?: string;
  subnets?: CreateVpdRequestSubnets[];
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      name: 'Name',
      regionId: 'RegionId',
      subnets: 'Subnets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      name: 'string',
      regionId: 'string',
      subnets: { 'type': 'array', 'itemType': CreateVpdRequestSubnets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpdResponseBody extends $tea.Model {
  code?: number;
  content?: CreateVpdResponseBodyContent;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      content: CreateVpdResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateVpdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVpdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubnetRequest extends $tea.Model {
  regionId?: string;
  subnetId?: string;
  vpdId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subnetId: 'SubnetId',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subnetId: 'string',
      vpdId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubnetResponseBody extends $tea.Model {
  code?: number;
  content?: any;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      content: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubnetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSubnetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSubnetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpdRequest extends $tea.Model {
  regionId?: string;
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpdId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpdResponseBody extends $tea.Model {
  code?: number;
  content?: any;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      content: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteVpdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVpdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubnetRequest extends $tea.Model {
  subnetId?: string;
  static names(): { [key: string]: string } {
    return {
      subnetId: 'SubnetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subnetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubnetResponseBody extends $tea.Model {
  code?: number;
  content?: GetSubnetResponseBodyContent;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      content: GetSubnetResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubnetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSubnetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSubnetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccRequest extends $tea.Model {
  regionId?: string;
  vccId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vccId: 'VccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vccId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccResponseBody extends $tea.Model {
  code?: number;
  content?: GetVccResponseBodyContent;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      content: GetVccResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetVccResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVccResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpdRequest extends $tea.Model {
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpdId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpdResponseBody extends $tea.Model {
  code?: number;
  content?: GetVpdResponseBodyContent;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      content: GetVpdResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetVpdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVpdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeVccResponseBody extends $tea.Model {
  code?: number;
  content?: InitializeVccResponseBodyContent;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      content: InitializeVccResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeVccResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InitializeVccResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InitializeVccResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubnetsRequest extends $tea.Model {
  enablePage?: boolean;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  status?: string;
  subnetId?: string;
  type?: string;
  vpdId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      enablePage: 'EnablePage',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      status: 'Status',
      subnetId: 'SubnetId',
      type: 'Type',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePage: 'boolean',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      status: 'string',
      subnetId: 'string',
      type: 'string',
      vpdId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubnetsResponseBody extends $tea.Model {
  code?: number;
  content?: ListSubnetsResponseBodyContent;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      content: ListSubnetsResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubnetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSubnetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSubnetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsRequest extends $tea.Model {
  bandwidth?: number;
  cenId?: string;
  enablePage?: boolean;
  exStatus?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  status?: string;
  vccId?: string;
  vpcId?: string;
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cenId: 'CenId',
      enablePage: 'EnablePage',
      exStatus: 'ExStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      status: 'Status',
      vccId: 'VccId',
      vpcId: 'VpcId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      cenId: 'string',
      enablePage: 'boolean',
      exStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      status: 'string',
      vccId: 'string',
      vpcId: 'string',
      vpdId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsResponseBody extends $tea.Model {
  code?: number;
  content?: ListVccsResponseBodyContent;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      content: ListVccsResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVccsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVccsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdsRequest extends $tea.Model {
  enablePage?: boolean;
  filterErId?: string;
  forSelect?: boolean;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  status?: string;
  vpdId?: string;
  withDependence?: boolean;
  withoutVcc?: boolean;
  static names(): { [key: string]: string } {
    return {
      enablePage: 'EnablePage',
      filterErId: 'FilterErId',
      forSelect: 'ForSelect',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      status: 'Status',
      vpdId: 'VpdId',
      withDependence: 'WithDependence',
      withoutVcc: 'WithoutVcc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePage: 'boolean',
      filterErId: 'string',
      forSelect: 'boolean',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      status: 'string',
      vpdId: 'string',
      withDependence: 'boolean',
      withoutVcc: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdsResponseBody extends $tea.Model {
  code?: number;
  content?: ListVpdsResponseBodyContent;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      content: ListVpdsResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVpdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVpdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubnetRequest extends $tea.Model {
  description?: string;
  name?: string;
  regionId?: string;
  subnetId?: string;
  vpdId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      subnetId: 'SubnetId',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      regionId: 'string',
      subnetId: 'string',
      vpdId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubnetResponseBody extends $tea.Model {
  code?: number;
  content?: UpdateSubnetResponseBodyContent;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      content: UpdateSubnetResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubnetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSubnetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSubnetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVccRequest extends $tea.Model {
  bandwidth?: number;
  orderId?: string;
  regionId?: string;
  vccId?: string;
  vccName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      orderId: 'OrderId',
      regionId: 'RegionId',
      vccId: 'VccId',
      vccName: 'VccName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      orderId: 'string',
      regionId: 'string',
      vccId: 'string',
      vccName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVccResponseBody extends $tea.Model {
  code?: number;
  content?: UpdateVccResponseBodyContent;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      content: UpdateVccResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVccResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateVccResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateVccResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpdRequest extends $tea.Model {
  description?: string;
  name?: string;
  regionId?: string;
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      regionId: 'string',
      vpdId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpdResponseBody extends $tea.Model {
  code?: number;
  content?: UpdateVpdResponseBodyContent;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      content: UpdateVpdResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateVpdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateVpdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubnetResponseBodyContent extends $tea.Model {
  subnetId?: string;
  static names(): { [key: string]: string } {
    return {
      subnetId: 'SubnetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subnetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVccResponseBodyContent extends $tea.Model {
  vccId?: string;
  static names(): { [key: string]: string } {
    return {
      vccId: 'VccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vccId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpdRequestSubnets extends $tea.Model {
  cidr?: string;
  name?: string;
  regionId?: string;
  type?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      name: 'Name',
      regionId: 'RegionId',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      name: 'string',
      regionId: 'string',
      type: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpdResponseBodyContent extends $tea.Model {
  subnetIds?: string[];
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      subnetIds: 'SubnetIds',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subnetIds: { 'type': 'array', 'itemType': 'string' },
      vpdId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubnetResponseBodyContentVpdBaseInfo extends $tea.Model {
  cidr?: string;
  gmtCreate?: string;
  name?: string;
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      gmtCreate: 'string',
      name: 'string',
      vpdId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubnetResponseBodyContent extends $tea.Model {
  cidr?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  lbCount?: number;
  message?: string;
  name?: string;
  ncCount?: number;
  regionId?: string;
  status?: string;
  subnetId?: string;
  tenantId?: string;
  type?: string;
  vpdBaseInfo?: GetSubnetResponseBodyContentVpdBaseInfo;
  vpdId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lbCount: 'LbCount',
      message: 'Message',
      name: 'Name',
      ncCount: 'NcCount',
      regionId: 'RegionId',
      status: 'Status',
      subnetId: 'SubnetId',
      tenantId: 'TenantId',
      type: 'Type',
      vpdBaseInfo: 'VpdBaseInfo',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      lbCount: 'number',
      message: 'string',
      name: 'string',
      ncCount: 'number',
      regionId: 'string',
      status: 'string',
      subnetId: 'string',
      tenantId: 'string',
      type: 'string',
      vpdBaseInfo: GetSubnetResponseBodyContentVpdBaseInfo,
      vpdId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccResponseBodyContentAliyunRouterInfo extends $tea.Model {
  localGatewayIp?: string;
  mask?: string;
  pcId?: string;
  peerGatewayIp?: string;
  vbrId?: string;
  vlanId?: string;
  static names(): { [key: string]: string } {
    return {
      localGatewayIp: 'LocalGatewayIp',
      mask: 'Mask',
      pcId: 'PcId',
      peerGatewayIp: 'PeerGatewayIp',
      vbrId: 'VbrId',
      vlanId: 'VlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localGatewayIp: 'string',
      mask: 'string',
      pcId: 'string',
      peerGatewayIp: 'string',
      vbrId: 'string',
      vlanId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccResponseBodyContentCisRouterInfoCcInfos extends $tea.Model {
  ccId?: string;
  localGatewayIp?: string;
  remoteGatewayIp?: string;
  status?: string;
  subnetMask?: string;
  vlanId?: string;
  static names(): { [key: string]: string } {
    return {
      ccId: 'CcId',
      localGatewayIp: 'LocalGatewayIp',
      remoteGatewayIp: 'RemoteGatewayIp',
      status: 'Status',
      subnetMask: 'SubnetMask',
      vlanId: 'VlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccId: 'string',
      localGatewayIp: 'string',
      remoteGatewayIp: 'string',
      status: 'string',
      subnetMask: 'string',
      vlanId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccResponseBodyContentCisRouterInfo extends $tea.Model {
  ccInfos?: GetVccResponseBodyContentCisRouterInfoCcInfos[];
  ccrId?: string;
  static names(): { [key: string]: string } {
    return {
      ccInfos: 'CcInfos',
      ccrId: 'CcrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccInfos: { 'type': 'array', 'itemType': GetVccResponseBodyContentCisRouterInfoCcInfos },
      ccrId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccResponseBodyContentVpdBaseInfo extends $tea.Model {
  cidr?: string;
  gmtCreate?: string;
  name?: string;
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      gmtCreate: 'string',
      name: 'string',
      vpdId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccResponseBodyContent extends $tea.Model {
  accessPointId?: string;
  aliyunRouterInfo?: GetVccResponseBodyContentAliyunRouterInfo[];
  bandwidthStr?: string;
  bgpCidr?: string;
  cenId?: string;
  cisRouterInfo?: GetVccResponseBodyContentCisRouterInfo[];
  commodityCode?: string;
  createTime?: string;
  currentNode?: string;
  duration?: string;
  gmtModified?: string;
  internetChargeType?: string;
  lineOperator?: string;
  message?: string;
  payType?: string;
  portType?: string;
  pricingCycle?: string;
  regionId?: string;
  spec?: string;
  status?: string;
  tenantId?: string;
  vSwitchId?: string;
  vccId?: string;
  vccName?: string;
  vpcId?: string;
  vpdBaseInfo?: GetVccResponseBodyContentVpdBaseInfo;
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      aliyunRouterInfo: 'AliyunRouterInfo',
      bandwidthStr: 'BandwidthStr',
      bgpCidr: 'BgpCidr',
      cenId: 'CenId',
      cisRouterInfo: 'CisRouterInfo',
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      currentNode: 'CurrentNode',
      duration: 'Duration',
      gmtModified: 'GmtModified',
      internetChargeType: 'InternetChargeType',
      lineOperator: 'LineOperator',
      message: 'Message',
      payType: 'PayType',
      portType: 'PortType',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      spec: 'Spec',
      status: 'Status',
      tenantId: 'TenantId',
      vSwitchId: 'VSwitchId',
      vccId: 'VccId',
      vccName: 'VccName',
      vpcId: 'VpcId',
      vpdBaseInfo: 'VpdBaseInfo',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      aliyunRouterInfo: { 'type': 'array', 'itemType': GetVccResponseBodyContentAliyunRouterInfo },
      bandwidthStr: 'string',
      bgpCidr: 'string',
      cenId: 'string',
      cisRouterInfo: { 'type': 'array', 'itemType': GetVccResponseBodyContentCisRouterInfo },
      commodityCode: 'string',
      createTime: 'string',
      currentNode: 'string',
      duration: 'string',
      gmtModified: 'string',
      internetChargeType: 'string',
      lineOperator: 'string',
      message: 'string',
      payType: 'string',
      portType: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      spec: 'string',
      status: 'string',
      tenantId: 'string',
      vSwitchId: 'string',
      vccId: 'string',
      vccName: 'string',
      vpcId: 'string',
      vpdBaseInfo: GetVccResponseBodyContentVpdBaseInfo,
      vpdId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpdResponseBodyContent extends $tea.Model {
  cidr?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  lbCount?: number;
  message?: string;
  name?: string;
  ncCount?: number;
  regionId?: string;
  route?: number;
  serviceCidr?: string;
  status?: string;
  subnetCount?: number;
  vccCount?: number;
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      lbCount: 'LbCount',
      message: 'Message',
      name: 'Name',
      ncCount: 'NcCount',
      regionId: 'RegionId',
      route: 'Route',
      serviceCidr: 'ServiceCidr',
      status: 'Status',
      subnetCount: 'SubnetCount',
      vccCount: 'VccCount',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      lbCount: 'number',
      message: 'string',
      name: 'string',
      ncCount: 'number',
      regionId: 'string',
      route: 'number',
      serviceCidr: 'string',
      status: 'string',
      subnetCount: 'number',
      vccCount: 'number',
      vpdId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeVccResponseBodyContent extends $tea.Model {
  requestId?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubnetsResponseBodyContentDataVpdBaseInfo extends $tea.Model {
  cidr?: string;
  gmtCreate?: string;
  name?: string;
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      gmtCreate: 'string',
      name: 'string',
      vpdId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubnetsResponseBodyContentData extends $tea.Model {
  cidr?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  message?: string;
  name?: string;
  ncCount?: number;
  regionId?: string;
  status?: string;
  subnetId?: string;
  tenantId?: string;
  type?: string;
  vpdBaseInfo?: ListSubnetsResponseBodyContentDataVpdBaseInfo;
  vpdId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      ncCount: 'NcCount',
      regionId: 'RegionId',
      status: 'Status',
      subnetId: 'SubnetId',
      tenantId: 'TenantId',
      type: 'Type',
      vpdBaseInfo: 'VpdBaseInfo',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      message: 'string',
      name: 'string',
      ncCount: 'number',
      regionId: 'string',
      status: 'string',
      subnetId: 'string',
      tenantId: 'string',
      type: 'string',
      vpdBaseInfo: ListSubnetsResponseBodyContentDataVpdBaseInfo,
      vpdId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubnetsResponseBodyContent extends $tea.Model {
  data?: ListSubnetsResponseBodyContentData[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSubnetsResponseBodyContentData },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsResponseBodyContentDataVpdBaseInfo extends $tea.Model {
  cidr?: string;
  gmtCreate?: string;
  name?: string;
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      gmtCreate: 'string',
      name: 'string',
      vpdId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsResponseBodyContentData extends $tea.Model {
  accessPointId?: string;
  bandwidthStr?: string;
  bgpCidr?: string;
  cenId?: string;
  createTime?: string;
  gmtModified?: string;
  lineOperator?: string;
  message?: string;
  portType?: string;
  rate?: number;
  regionId?: string;
  spec?: string;
  status?: string;
  tenantId?: string;
  vccId?: string;
  vccName?: string;
  vpcId?: string;
  vpdBaseInfo?: ListVccsResponseBodyContentDataVpdBaseInfo;
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      bandwidthStr: 'BandwidthStr',
      bgpCidr: 'BgpCidr',
      cenId: 'CenId',
      createTime: 'CreateTime',
      gmtModified: 'GmtModified',
      lineOperator: 'LineOperator',
      message: 'Message',
      portType: 'PortType',
      rate: 'Rate',
      regionId: 'RegionId',
      spec: 'Spec',
      status: 'Status',
      tenantId: 'TenantId',
      vccId: 'VccId',
      vccName: 'VccName',
      vpcId: 'VpcId',
      vpdBaseInfo: 'VpdBaseInfo',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      bandwidthStr: 'string',
      bgpCidr: 'string',
      cenId: 'string',
      createTime: 'string',
      gmtModified: 'string',
      lineOperator: 'string',
      message: 'string',
      portType: 'string',
      rate: 'number',
      regionId: 'string',
      spec: 'string',
      status: 'string',
      tenantId: 'string',
      vccId: 'string',
      vccName: 'string',
      vpcId: 'string',
      vpdBaseInfo: ListVccsResponseBodyContentDataVpdBaseInfo,
      vpdId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsResponseBodyContent extends $tea.Model {
  data?: ListVccsResponseBodyContentData[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVccsResponseBodyContentData },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdsResponseBodyContentData extends $tea.Model {
  cidr?: string;
  dependence?: { [key: string]: any };
  gmtCreate?: string;
  gmtModified?: string;
  message?: string;
  name?: string;
  ncCount?: number;
  regionId?: string;
  route?: number;
  serviceCidr?: string;
  status?: string;
  subnetCount?: number;
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      dependence: 'Dependence',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      message: 'Message',
      name: 'Name',
      ncCount: 'NcCount',
      regionId: 'RegionId',
      route: 'Route',
      serviceCidr: 'ServiceCidr',
      status: 'Status',
      subnetCount: 'SubnetCount',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      dependence: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'string',
      gmtModified: 'string',
      message: 'string',
      name: 'string',
      ncCount: 'number',
      regionId: 'string',
      route: 'number',
      serviceCidr: 'string',
      status: 'string',
      subnetCount: 'number',
      vpdId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdsResponseBodyContent extends $tea.Model {
  data?: ListVpdsResponseBodyContentData[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVpdsResponseBodyContentData },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubnetResponseBodyContent extends $tea.Model {
  subnetId?: string;
  static names(): { [key: string]: string } {
    return {
      subnetId: 'SubnetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subnetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVccResponseBodyContent extends $tea.Model {
  vccId?: string;
  static names(): { [key: string]: string } {
    return {
      vccId: 'VccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vccId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpdResponseBodyContent extends $tea.Model {
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpdId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eflo", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async createSubnetWithOptions(request: CreateSubnetRequest, runtime: $Util.RuntimeOptions): Promise<CreateSubnetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cidr)) {
      body["Cidr"] = request.cidr;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!Util.isUnset(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSubnet",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSubnetResponse>(await this.callApi(params, req, runtime), new CreateSubnetResponse({}));
  }

  async createSubnet(request: CreateSubnetRequest): Promise<CreateSubnetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSubnetWithOptions(request, runtime);
  }

  async createVccWithOptions(request: CreateVccRequest, runtime: $Util.RuntimeOptions): Promise<CreateVccResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessCouldService)) {
      body["AccessCouldService"] = request.accessCouldService;
    }

    if (!Util.isUnset(request.bgpCidr)) {
      body["BgpCidr"] = request.bgpCidr;
    }

    if (!Util.isUnset(request.cenId)) {
      body["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      body["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateVcc",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVccResponse>(await this.callApi(params, req, runtime), new CreateVccResponse({}));
  }

  async createVcc(request: CreateVccRequest): Promise<CreateVccResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVccWithOptions(request, runtime);
  }

  async createVpdWithOptions(request: CreateVpdRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cidr)) {
      body["Cidr"] = request.cidr;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.subnets)) {
      body["Subnets"] = request.subnets;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateVpd",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVpdResponse>(await this.callApi(params, req, runtime), new CreateVpdResponse({}));
  }

  async createVpd(request: CreateVpdRequest): Promise<CreateVpdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpdWithOptions(request, runtime);
  }

  async deleteSubnetWithOptions(request: DeleteSubnetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSubnetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    if (!Util.isUnset(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!Util.isUnset(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSubnet",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSubnetResponse>(await this.callApi(params, req, runtime), new DeleteSubnetResponse({}));
  }

  async deleteSubnet(request: DeleteSubnetRequest): Promise<DeleteSubnetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSubnetWithOptions(request, runtime);
  }

  async deleteVpdWithOptions(request: DeleteVpdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVpd",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVpdResponse>(await this.callApi(params, req, runtime), new DeleteVpdResponse({}));
  }

  async deleteVpd(request: DeleteVpdRequest): Promise<DeleteVpdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpdWithOptions(request, runtime);
  }

  async getSubnetWithOptions(request: GetSubnetRequest, runtime: $Util.RuntimeOptions): Promise<GetSubnetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSubnet",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSubnetResponse>(await this.callApi(params, req, runtime), new GetSubnetResponse({}));
  }

  async getSubnet(request: GetSubnetRequest): Promise<GetSubnetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSubnetWithOptions(request, runtime);
  }

  async getVccWithOptions(request: GetVccRequest, runtime: $Util.RuntimeOptions): Promise<GetVccResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetVcc",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVccResponse>(await this.callApi(params, req, runtime), new GetVccResponse({}));
  }

  async getVcc(request: GetVccRequest): Promise<GetVccResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVccWithOptions(request, runtime);
  }

  async getVpdWithOptions(request: GetVpdRequest, runtime: $Util.RuntimeOptions): Promise<GetVpdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetVpd",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVpdResponse>(await this.callApi(params, req, runtime), new GetVpdResponse({}));
  }

  async getVpd(request: GetVpdRequest): Promise<GetVpdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVpdWithOptions(request, runtime);
  }

  async initializeVccWithOptions(runtime: $Util.RuntimeOptions): Promise<InitializeVccResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "InitializeVcc",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitializeVccResponse>(await this.callApi(params, req, runtime), new InitializeVccResponse({}));
  }

  async initializeVcc(): Promise<InitializeVccResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initializeVccWithOptions(runtime);
  }

  async listSubnetsWithOptions(request: ListSubnetsRequest, runtime: $Util.RuntimeOptions): Promise<ListSubnetsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!Util.isUnset(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSubnets",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSubnetsResponse>(await this.callApi(params, req, runtime), new ListSubnetsResponse({}));
  }

  async listSubnets(request: ListSubnetsRequest): Promise<ListSubnetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSubnetsWithOptions(request, runtime);
  }

  async listVccsWithOptions(request: ListVccsRequest, runtime: $Util.RuntimeOptions): Promise<ListVccsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bandwidth)) {
      body["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.cenId)) {
      body["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!Util.isUnset(request.exStatus)) {
      body["ExStatus"] = request.exStatus;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListVccs",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVccsResponse>(await this.callApi(params, req, runtime), new ListVccsResponse({}));
  }

  async listVccs(request: ListVccsRequest): Promise<ListVccsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVccsWithOptions(request, runtime);
  }

  async listVpdsWithOptions(request: ListVpdsRequest, runtime: $Util.RuntimeOptions): Promise<ListVpdsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!Util.isUnset(request.filterErId)) {
      body["FilterErId"] = request.filterErId;
    }

    if (!Util.isUnset(request.forSelect)) {
      body["ForSelect"] = request.forSelect;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!Util.isUnset(request.withDependence)) {
      body["WithDependence"] = request.withDependence;
    }

    if (!Util.isUnset(request.withoutVcc)) {
      body["WithoutVcc"] = request.withoutVcc;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListVpds",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVpdsResponse>(await this.callApi(params, req, runtime), new ListVpdsResponse({}));
  }

  async listVpds(request: ListVpdsRequest): Promise<ListVpdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpdsWithOptions(request, runtime);
  }

  async updateSubnetWithOptions(request: UpdateSubnetRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSubnetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    if (!Util.isUnset(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!Util.isUnset(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSubnet",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSubnetResponse>(await this.callApi(params, req, runtime), new UpdateSubnetResponse({}));
  }

  async updateSubnet(request: UpdateSubnetRequest): Promise<UpdateSubnetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSubnetWithOptions(request, runtime);
  }

  async updateVccWithOptions(request: UpdateVccRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVccResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bandwidth)) {
      body["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.orderId)) {
      body["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    if (!Util.isUnset(request.vccName)) {
      body["VccName"] = request.vccName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateVcc",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateVccResponse>(await this.callApi(params, req, runtime), new UpdateVccResponse({}));
  }

  async updateVcc(request: UpdateVccRequest): Promise<UpdateVccResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVccWithOptions(request, runtime);
  }

  async updateVpdWithOptions(request: UpdateVpdRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVpdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateVpd",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateVpdResponse>(await this.callApi(params, req, runtime), new UpdateVpdResponse({}));
  }

  async updateVpd(request: UpdateVpdRequest): Promise<UpdateVpdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVpdWithOptions(request, runtime);
  }

}
