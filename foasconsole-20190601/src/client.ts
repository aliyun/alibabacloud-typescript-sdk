// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ConvertInstanceRequest extends $tea.Model {
  convertPostpayInstanceRequest?: ConvertInstanceRequestConvertPostpayInstanceRequest;
  static names(): { [key: string]: string } {
    return {
      convertPostpayInstanceRequest: 'ConvertPostpayInstanceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      convertPostpayInstanceRequest: ConvertInstanceRequestConvertPostpayInstanceRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertInstanceResponseBody extends $tea.Model {
  orderId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConvertInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConvertInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  createInstanceRequest?: CreateInstanceRequestCreateInstanceRequest;
  static names(): { [key: string]: string } {
    return {
      createInstanceRequest: 'CreateInstanceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createInstanceRequest: CreateInstanceRequestCreateInstanceRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  orderInfo?: CreateInstanceResponseBodyOrderInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      orderInfo: 'OrderInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderInfo: CreateInstanceResponseBodyOrderInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceRequest extends $tea.Model {
  createNamespaceRequest?: CreateNamespaceRequestCreateNamespaceRequest;
  static names(): { [key: string]: string } {
    return {
      createNamespaceRequest: 'CreateNamespaceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createNamespaceRequest: CreateNamespaceRequestCreateNamespaceRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
  deleteInstanceRequest?: DeleteInstanceRequestDeleteInstanceRequest;
  static names(): { [key: string]: string } {
    return {
      deleteInstanceRequest: 'DeleteInstanceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteInstanceRequest: DeleteInstanceRequestDeleteInstanceRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceRequest extends $tea.Model {
  deleteNamespaceRequest?: DeleteNamespaceRequestDeleteNamespaceRequest;
  static names(): { [key: string]: string } {
    return {
      deleteNamespaceRequest: 'DeleteNamespaceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteNamespaceRequest: DeleteNamespaceRequestDeleteNamespaceRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  describeInstancesRequest?: DescribeInstancesRequestDescribeInstancesRequest;
  static names(): { [key: string]: string } {
    return {
      describeInstancesRequest: 'DescribeInstancesRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeInstancesRequest: DescribeInstancesRequestDescribeInstancesRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $tea.Model {
  instances?: DescribeInstancesResponseBodyInstances[];
  pageIndex?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesRequest extends $tea.Model {
  describeNamespacesRequest?: DescribeNamespacesRequestDescribeNamespacesRequest;
  static names(): { [key: string]: string } {
    return {
      describeNamespacesRequest: 'DescribeNamespacesRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeNamespacesRequest: DescribeNamespacesRequestDescribeNamespacesRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBody extends $tea.Model {
  namespaces?: DescribeNamespacesResponseBodyNamespaces[];
  pageIndex?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      namespaces: 'Namespaces',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaces: { 'type': 'array', 'itemType': DescribeNamespacesResponseBodyNamespaces },
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNamespacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNamespacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecRequest extends $tea.Model {
  modifyPrepayInstanceSpecRequest?: ModifyPrepayInstanceSpecRequestModifyPrepayInstanceSpecRequest;
  static names(): { [key: string]: string } {
    return {
      modifyPrepayInstanceSpecRequest: 'ModifyPrepayInstanceSpecRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyPrepayInstanceSpecRequest: ModifyPrepayInstanceSpecRequestModifyPrepayInstanceSpecRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecResponseBody extends $tea.Model {
  orderId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyPrepayInstanceSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPrepayInstanceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayNamespaceSpecRequest extends $tea.Model {
  modifyPrepayNamespaceSpecRequest?: ModifyPrepayNamespaceSpecRequestModifyPrepayNamespaceSpecRequest;
  static names(): { [key: string]: string } {
    return {
      modifyPrepayNamespaceSpecRequest: 'ModifyPrepayNamespaceSpecRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyPrepayNamespaceSpecRequest: ModifyPrepayNamespaceSpecRequestModifyPrepayNamespaceSpecRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayNamespaceSpecResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayNamespaceSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyPrepayNamespaceSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPrepayNamespaceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceRequest extends $tea.Model {
  convertPostpayInstanceRequest?: QueryConvertInstancePriceRequestConvertPostpayInstanceRequest;
  static names(): { [key: string]: string } {
    return {
      convertPostpayInstanceRequest: 'ConvertPostpayInstanceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      convertPostpayInstanceRequest: QueryConvertInstancePriceRequestConvertPostpayInstanceRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceResponseBody extends $tea.Model {
  priceInfo?: QueryConvertInstancePriceResponseBodyPriceInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: QueryConvertInstancePriceResponseBodyPriceInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryConvertInstancePriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryConvertInstancePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $tea.Model {
  renewInstanceRequest?: RenewInstanceRequestRenewInstanceRequest;
  static names(): { [key: string]: string } {
    return {
      renewInstanceRequest: 'RenewInstanceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renewInstanceRequest: RenewInstanceRequestRenewInstanceRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $tea.Model {
  orderId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenewInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenewInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertInstanceRequestConvertPostpayInstanceRequestNamespaceResourceSpecsResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertInstanceRequestConvertPostpayInstanceRequestNamespaceResourceSpecs extends $tea.Model {
  namespace?: string;
  resourceSpec?: ConvertInstanceRequestConvertPostpayInstanceRequestNamespaceResourceSpecsResourceSpec;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      resourceSpec: ConvertInstanceRequestConvertPostpayInstanceRequestNamespaceResourceSpecsResourceSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertInstanceRequestConvertPostpayInstanceRequest extends $tea.Model {
  duration?: number;
  instanceId?: string;
  isAutoRenew?: boolean;
  namespaceResourceSpecs?: ConvertInstanceRequestConvertPostpayInstanceRequestNamespaceResourceSpecs[];
  pricingCycle?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      isAutoRenew: 'IsAutoRenew',
      namespaceResourceSpecs: 'NamespaceResourceSpecs',
      pricingCycle: 'PricingCycle',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      isAutoRenew: 'boolean',
      namespaceResourceSpecs: { 'type': 'array', 'itemType': ConvertInstanceRequestConvertPostpayInstanceRequestNamespaceResourceSpecs },
      pricingCycle: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestCreateInstanceRequestResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestCreateInstanceRequestStorageOss extends $tea.Model {
  bucket?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestCreateInstanceRequestStorage extends $tea.Model {
  oss?: CreateInstanceRequestCreateInstanceRequestStorageOss;
  static names(): { [key: string]: string } {
    return {
      oss: 'Oss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oss: CreateInstanceRequestCreateInstanceRequestStorageOss,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestCreateInstanceRequest extends $tea.Model {
  autoRenew?: boolean;
  chargeType?: string;
  duration?: number;
  instanceName?: string;
  pricingCycle?: string;
  region?: string;
  resourceSpec?: CreateInstanceRequestCreateInstanceRequestResourceSpec;
  storage?: CreateInstanceRequestCreateInstanceRequestStorage;
  vSwitchIds?: string[];
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      duration: 'Duration',
      instanceName: 'InstanceName',
      pricingCycle: 'PricingCycle',
      region: 'Region',
      resourceSpec: 'ResourceSpec',
      storage: 'Storage',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      chargeType: 'string',
      duration: 'number',
      instanceName: 'string',
      pricingCycle: 'string',
      region: 'string',
      resourceSpec: CreateInstanceRequestCreateInstanceRequestResourceSpec,
      storage: CreateInstanceRequestCreateInstanceRequestStorage,
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyOrderInfo extends $tea.Model {
  instanceId?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceRequestCreateNamespaceRequestResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceRequestCreateNamespaceRequest extends $tea.Model {
  instanceId?: string;
  namespace?: string;
  region?: string;
  resourceSpec?: CreateNamespaceRequestCreateNamespaceRequestResourceSpec;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      region: 'Region',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespace: 'string',
      region: 'string',
      resourceSpec: CreateNamespaceRequestCreateNamespaceRequestResourceSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequestDeleteInstanceRequest extends $tea.Model {
  instanceId?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceRequestDeleteNamespaceRequest extends $tea.Model {
  instanceId?: string;
  namespace?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespace: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequestDescribeInstancesRequest extends $tea.Model {
  chargeType?: string;
  instanceId?: string;
  pageIndex?: number;
  pageSize?: number;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      instanceId: 'InstanceId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      instanceId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesStorageOss extends $tea.Model {
  bucket?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesStorage extends $tea.Model {
  oss?: DescribeInstancesResponseBodyInstancesStorageOss;
  static names(): { [key: string]: string } {
    return {
      oss: 'Oss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oss: DescribeInstancesResponseBodyInstancesStorageOss,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstances extends $tea.Model {
  chargeType?: string;
  clusterStatus?: string;
  instanceId?: string;
  instanceName?: string;
  orderState?: string;
  region?: string;
  resourceCreateTime?: number;
  resourceId?: string;
  resourceSpec?: DescribeInstancesResponseBodyInstancesResourceSpec;
  storage?: DescribeInstancesResponseBodyInstancesStorage;
  uid?: string;
  vSwitchIds?: string[];
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      clusterStatus: 'ClusterStatus',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      orderState: 'OrderState',
      region: 'Region',
      resourceCreateTime: 'ResourceCreateTime',
      resourceId: 'ResourceId',
      resourceSpec: 'ResourceSpec',
      storage: 'Storage',
      uid: 'Uid',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      clusterStatus: 'string',
      instanceId: 'string',
      instanceName: 'string',
      orderState: 'string',
      region: 'string',
      resourceCreateTime: 'number',
      resourceId: 'string',
      resourceSpec: DescribeInstancesResponseBodyInstancesResourceSpec,
      storage: DescribeInstancesResponseBodyInstancesStorage,
      uid: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesRequestDescribeNamespacesRequest extends $tea.Model {
  instanceId?: string;
  namespace?: string;
  pageIndex?: number;
  pageSize?: number;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespace: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBodyNamespacesResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBodyNamespacesResourceUsed extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBodyNamespaces extends $tea.Model {
  gmtCreate?: number;
  gmtModified?: number;
  namespace?: string;
  resourceSpec?: DescribeNamespacesResponseBodyNamespacesResourceSpec;
  resourceUsed?: DescribeNamespacesResponseBodyNamespacesResourceUsed;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      namespace: 'Namespace',
      resourceSpec: 'ResourceSpec',
      resourceUsed: 'ResourceUsed',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      namespace: 'string',
      resourceSpec: DescribeNamespacesResponseBodyNamespacesResourceSpec,
      resourceUsed: DescribeNamespacesResponseBodyNamespacesResourceUsed,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecRequestModifyPrepayInstanceSpecRequestResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecRequestModifyPrepayInstanceSpecRequest extends $tea.Model {
  instanceId?: string;
  region?: string;
  resourceSpec?: ModifyPrepayInstanceSpecRequestModifyPrepayInstanceSpecRequestResourceSpec;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      region: 'Region',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      region: 'string',
      resourceSpec: ModifyPrepayInstanceSpecRequestModifyPrepayInstanceSpecRequestResourceSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayNamespaceSpecRequestModifyPrepayNamespaceSpecRequestResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayNamespaceSpecRequestModifyPrepayNamespaceSpecRequest extends $tea.Model {
  instanceId?: string;
  namespace?: string;
  region?: string;
  resourceSpec?: ModifyPrepayNamespaceSpecRequestModifyPrepayNamespaceSpecRequestResourceSpec;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      region: 'Region',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespace: 'string',
      region: 'string',
      resourceSpec: ModifyPrepayNamespaceSpecRequestModifyPrepayNamespaceSpecRequestResourceSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceRequestConvertPostpayInstanceRequestNamespaceResourceSpecsResourceSpec extends $tea.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceRequestConvertPostpayInstanceRequestNamespaceResourceSpecs extends $tea.Model {
  namespace?: string;
  resourceSpec?: QueryConvertInstancePriceRequestConvertPostpayInstanceRequestNamespaceResourceSpecsResourceSpec;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      resourceSpec: QueryConvertInstancePriceRequestConvertPostpayInstanceRequestNamespaceResourceSpecsResourceSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceRequestConvertPostpayInstanceRequest extends $tea.Model {
  duration?: number;
  instanceId?: string;
  isAutoRenew?: boolean;
  namespaceResourceSpecs?: QueryConvertInstancePriceRequestConvertPostpayInstanceRequestNamespaceResourceSpecs[];
  pricingCycle?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      isAutoRenew: 'IsAutoRenew',
      namespaceResourceSpecs: 'NamespaceResourceSpecs',
      pricingCycle: 'PricingCycle',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      isAutoRenew: 'boolean',
      namespaceResourceSpecs: { 'type': 'array', 'itemType': QueryConvertInstancePriceRequestConvertPostpayInstanceRequestNamespaceResourceSpecs },
      pricingCycle: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceResponseBodyPriceInfoOptionalPromotions extends $tea.Model {
  promotionDesc?: string;
  promotionName?: string;
  promotionOptionNo?: string;
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      promotionDesc: 'PromotionDesc',
      promotionName: 'PromotionName',
      promotionOptionNo: 'PromotionOptionNo',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDesc: 'string',
      promotionName: 'string',
      promotionOptionNo: 'string',
      selected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceResponseBodyPriceInfoRules extends $tea.Model {
  description?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceResponseBodyPriceInfo extends $tea.Model {
  code?: string;
  currency?: string;
  discountAmount?: number;
  message?: string;
  optionalPromotions?: QueryConvertInstancePriceResponseBodyPriceInfoOptionalPromotions;
  originalAmount?: number;
  rules?: QueryConvertInstancePriceResponseBodyPriceInfoRules[];
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currency: 'Currency',
      discountAmount: 'DiscountAmount',
      message: 'Message',
      optionalPromotions: 'OptionalPromotions',
      originalAmount: 'OriginalAmount',
      rules: 'Rules',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currency: 'string',
      discountAmount: 'number',
      message: 'string',
      optionalPromotions: QueryConvertInstancePriceResponseBodyPriceInfoOptionalPromotions,
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryConvertInstancePriceResponseBodyPriceInfoRules },
      tradeAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequestRenewInstanceRequest extends $tea.Model {
  duration?: number;
  instanceId?: string;
  pricingCycle?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      pricingCycle: 'PricingCycle',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      pricingCycle: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("foasconsole", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async convertInstanceWithOptions(request: ConvertInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ConvertInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConvertInstanceResponse>(await this.doRPCRequest("ConvertInstance", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConvertInstanceResponse({}));
  }

  async convertInstance(request: ConvertInstanceRequest): Promise<ConvertInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.convertInstanceWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateInstanceResponse>(await this.doRPCRequest("CreateInstance", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async createNamespaceWithOptions(request: CreateNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateNamespaceResponse>(await this.doRPCRequest("CreateNamespace", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateNamespaceResponse({}));
  }

  async createNamespace(request: CreateNamespaceRequest): Promise<CreateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNamespaceWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteInstanceResponse>(await this.doRPCRequest("DeleteInstance", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async deleteNamespaceWithOptions(request: DeleteNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteNamespaceResponse>(await this.doRPCRequest("DeleteNamespace", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteNamespaceResponse({}));
  }

  async deleteNamespace(request: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNamespaceWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeInstancesResponse>(await this.doRPCRequest("DescribeInstances", "2019-06-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeNamespacesWithOptions(request: DescribeNamespacesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNamespacesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeNamespacesResponse>(await this.doRPCRequest("DescribeNamespaces", "2019-06-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeNamespacesResponse({}));
  }

  async describeNamespaces(request: DescribeNamespacesRequest): Promise<DescribeNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNamespacesWithOptions(request, runtime);
  }

  async modifyPrepayInstanceSpecWithOptions(request: ModifyPrepayInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPrepayInstanceSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPrepayInstanceSpecResponse>(await this.doRPCRequest("ModifyPrepayInstanceSpec", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPrepayInstanceSpecResponse({}));
  }

  async modifyPrepayInstanceSpec(request: ModifyPrepayInstanceSpecRequest): Promise<ModifyPrepayInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPrepayInstanceSpecWithOptions(request, runtime);
  }

  async modifyPrepayNamespaceSpecWithOptions(request: ModifyPrepayNamespaceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPrepayNamespaceSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPrepayNamespaceSpecResponse>(await this.doRPCRequest("ModifyPrepayNamespaceSpec", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPrepayNamespaceSpecResponse({}));
  }

  async modifyPrepayNamespaceSpec(request: ModifyPrepayNamespaceSpecRequest): Promise<ModifyPrepayNamespaceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPrepayNamespaceSpecWithOptions(request, runtime);
  }

  async queryConvertInstancePriceWithOptions(request: QueryConvertInstancePriceRequest, runtime: $Util.RuntimeOptions): Promise<QueryConvertInstancePriceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryConvertInstancePriceResponse>(await this.doRPCRequest("QueryConvertInstancePrice", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryConvertInstancePriceResponse({}));
  }

  async queryConvertInstancePrice(request: QueryConvertInstancePriceRequest): Promise<QueryConvertInstancePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryConvertInstancePriceWithOptions(request, runtime);
  }

  async renewInstanceWithOptions(request: RenewInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenewInstanceResponse>(await this.doRPCRequest("RenewInstance", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new RenewInstanceResponse({}));
  }

  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

}
