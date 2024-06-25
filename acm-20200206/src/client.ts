// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchExportConfigurationsRequest extends $tea.Model {
  data?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchExportConfigurationsResponseBody extends $tea.Model {
  code?: string;
  fileUrl?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fileUrl: 'FileUrl',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fileUrl: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchExportConfigurationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchExportConfigurationsResponseBody;
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
      body: BatchExportConfigurationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchImportConfigurationsRequest extends $tea.Model {
  fileUrl?: string;
  namespaceId?: string;
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      namespaceId: 'NamespaceId',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      namespaceId: 'string',
      policy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchImportConfigurationsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchImportConfigurationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchImportConfigurationsResponseBody;
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
      body: BatchImportConfigurationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConfigurationCloneRequest extends $tea.Model {
  data?: string;
  namespaceFrom?: string;
  namespaceTo?: string;
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      namespaceFrom: 'NamespaceFrom',
      namespaceTo: 'NamespaceTo',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      namespaceFrom: 'string',
      namespaceTo: 'string',
      policy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConfigurationCloneResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: CheckConfigurationCloneResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: CheckConfigurationCloneResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConfigurationCloneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckConfigurationCloneResponseBody;
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
      body: CheckConfigurationCloneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConfigurationExportRequest extends $tea.Model {
  data?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConfigurationExportResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: CheckConfigurationExportResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: CheckConfigurationExportResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConfigurationExportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckConfigurationExportResponseBody;
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
      body: CheckConfigurationExportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneConfigurationRequest extends $tea.Model {
  data?: string;
  namespaceFrom?: string;
  namespaceTo?: string;
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      namespaceFrom: 'NamespaceFrom',
      namespaceTo: 'NamespaceTo',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      namespaceFrom: 'string',
      namespaceTo: 'string',
      policy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneConfigurationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: CloneConfigurationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: CloneConfigurationResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneConfigurationResponseBody;
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
      body: CloneConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigurationRequest extends $tea.Model {
  appName?: string;
  content?: string;
  dataId?: string;
  desc?: string;
  group?: string;
  namespaceId?: string;
  tags?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      content: 'Content',
      dataId: 'DataId',
      desc: 'Desc',
      group: 'Group',
      namespaceId: 'NamespaceId',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      content: 'string',
      dataId: 'string',
      desc: 'string',
      group: 'string',
      namespaceId: 'string',
      tags: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigurationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateConfigurationResponseBody;
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
      body: CreateConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  namespaceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      namespaceId: 'NamespaceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      namespaceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNamespaceResponseBody;
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
      body: CreateNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigurationRequest extends $tea.Model {
  dataId?: string;
  group?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigurationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConfigurationResponseBody;
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
      body: DeleteConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNamespaceResponseBody;
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
      body: DeleteNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployConfigurationRequest extends $tea.Model {
  appName?: string;
  betaIps?: string;
  content?: string;
  dataId?: string;
  desc?: string;
  group?: string;
  namespaceId?: string;
  tags?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      betaIps: 'BetaIps',
      content: 'Content',
      dataId: 'DataId',
      desc: 'Desc',
      group: 'Group',
      namespaceId: 'NamespaceId',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      betaIps: 'string',
      content: 'string',
      dataId: 'string',
      desc: 'string',
      group: 'string',
      namespaceId: 'string',
      tags: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployConfigurationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeployConfigurationResponseBody;
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
      body: DeployConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationRequest extends $tea.Model {
  dataId?: string;
  group?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationResponseBody extends $tea.Model {
  code?: string;
  configuration?: DescribeConfigurationResponseBodyConfiguration;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      configuration: 'Configuration',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      configuration: DescribeConfigurationResponseBodyConfiguration,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeConfigurationResponseBody;
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
      body: DescribeConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportFileUrlRequest extends $tea.Model {
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportFileUrlResponseBody extends $tea.Model {
  code?: string;
  fileUrl?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fileUrl: 'FileUrl',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fileUrl: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportFileUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeImportFileUrlResponseBody;
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
      body: DescribeImportFileUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  namespace?: DescribeNamespaceResponseBodyNamespace;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      namespace: 'Namespace',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      namespace: DescribeNamespaceResponseBodyNamespace,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNamespaceResponseBody;
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
      body: DescribeNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  namespaces?: DescribeNamespacesResponseBodyNamespaces[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      namespaces: 'Namespaces',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      namespaces: { 'type': 'array', 'itemType': DescribeNamespacesResponseBodyNamespaces },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNamespacesResponseBody;
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
      body: DescribeNamespacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesWithCreateResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  namespaces?: DescribeNamespacesWithCreateResponseBodyNamespaces[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      namespaces: 'Namespaces',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      namespaces: { 'type': 'array', 'itemType': DescribeNamespacesWithCreateResponseBodyNamespaces },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesWithCreateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNamespacesWithCreateResponseBody;
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
      body: DescribeNamespacesWithCreateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceByConfigurationRequest extends $tea.Model {
  dataId?: string;
  endTs?: string;
  group?: string;
  namespaceId?: string;
  startTs?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      endTs: 'EndTs',
      group: 'Group',
      namespaceId: 'NamespaceId',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      endTs: 'string',
      group: 'string',
      namespaceId: 'string',
      startTs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceByConfigurationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  traces?: DescribeTraceByConfigurationResponseBodyTraces[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      traces: 'Traces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      traces: { 'type': 'array', 'itemType': DescribeTraceByConfigurationResponseBodyTraces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceByConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTraceByConfigurationResponseBody;
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
      body: DescribeTraceByConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceRequest extends $tea.Model {
  namespaceId?: string;
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      namespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateNamespaceResponseBody;
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
      body: UpdateNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConfigurationCloneResponseBodyResultSuccessItems extends $tea.Model {
  dataId?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConfigurationCloneResponseBodyResult extends $tea.Model {
  success?: boolean;
  successItems?: CheckConfigurationCloneResponseBodyResultSuccessItems[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      successItems: 'SuccessItems',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      successItems: { 'type': 'array', 'itemType': CheckConfigurationCloneResponseBodyResultSuccessItems },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConfigurationExportResponseBodyResult extends $tea.Model {
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneConfigurationResponseBodyResultSuccessItems extends $tea.Model {
  dataId?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneConfigurationResponseBodyResult extends $tea.Model {
  success?: boolean;
  successItems?: CloneConfigurationResponseBodyResultSuccessItems[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      successItems: 'SuccessItems',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      successItems: { 'type': 'array', 'itemType': CloneConfigurationResponseBodyResultSuccessItems },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationResponseBodyConfiguration extends $tea.Model {
  appName?: string;
  content?: string;
  dataId?: string;
  desc?: string;
  gmtCreate?: string;
  gmtModified?: string;
  group?: string;
  md5?: string;
  tags?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      content: 'Content',
      dataId: 'DataId',
      desc: 'Desc',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      group: 'Group',
      md5: 'Md5',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      content: 'string',
      dataId: 'string',
      desc: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      group: 'string',
      md5: 'string',
      tags: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResponseBodyNamespace extends $tea.Model {
  accessKey?: string;
  endpoint?: string;
  name?: string;
  regionId?: string;
  secretKey?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      endpoint: 'Endpoint',
      name: 'Name',
      regionId: 'RegionId',
      secretKey: 'SecretKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      endpoint: 'string',
      name: 'string',
      regionId: 'string',
      secretKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBodyNamespaces extends $tea.Model {
  configCount?: number;
  namespaceId?: string;
  namespaceName?: string;
  quota?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      configCount: 'ConfigCount',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      quota: 'Quota',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configCount: 'number',
      namespaceId: 'string',
      namespaceName: 'string',
      quota: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesWithCreateResponseBodyNamespaces extends $tea.Model {
  configCount?: number;
  namespaceId?: string;
  namespaceName?: string;
  quota?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      configCount: 'ConfigCount',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      quota: 'Quota',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configCount: 'number',
      namespaceId: 'string',
      namespaceName: 'string',
      quota: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceByConfigurationResponseBodyTracesEventGroupsEventDetails extends $tea.Model {
  dataId?: string;
  delay?: string;
  event?: string;
  ext?: string;
  group?: string;
  handleIp?: string;
  logDate?: string;
  requestIp?: string;
  responseIp?: string;
  ts?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      delay: 'Delay',
      event: 'Event',
      ext: 'Ext',
      group: 'Group',
      handleIp: 'HandleIp',
      logDate: 'LogDate',
      requestIp: 'RequestIp',
      responseIp: 'ResponseIp',
      ts: 'Ts',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      delay: 'string',
      event: 'string',
      ext: 'string',
      group: 'string',
      handleIp: 'string',
      logDate: 'string',
      requestIp: 'string',
      responseIp: 'string',
      ts: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceByConfigurationResponseBodyTracesEventGroups extends $tea.Model {
  eventDetails?: DescribeTraceByConfigurationResponseBodyTracesEventGroupsEventDetails[];
  eventType?: string;
  static names(): { [key: string]: string } {
    return {
      eventDetails: 'EventDetails',
      eventType: 'EventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDetails: { 'type': 'array', 'itemType': DescribeTraceByConfigurationResponseBodyTracesEventGroupsEventDetails },
      eventType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceByConfigurationResponseBodyTraces extends $tea.Model {
  eventGroups?: DescribeTraceByConfigurationResponseBodyTracesEventGroups[];
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      eventGroups: 'EventGroups',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventGroups: { 'type': 'array', 'itemType': DescribeTraceByConfigurationResponseBodyTracesEventGroups },
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("acm", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
   * @param request BatchExportConfigurationsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchExportConfigurationsResponse
   */
  async batchExportConfigurationsWithOptions(request: BatchExportConfigurationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchExportConfigurationsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      query["Data"] = request.data;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchExportConfigurations",
      version: "2020-02-06",
      protocol: "HTTPS",
      pathname: `/diamond-ops/pop/batch/export`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchExportConfigurationsResponse>(await this.callApi(params, req, runtime), new BatchExportConfigurationsResponse({}));
  }

  /**
   * @param request BatchExportConfigurationsRequest
   * @return BatchExportConfigurationsResponse
   */
  async batchExportConfigurations(request: BatchExportConfigurationsRequest): Promise<BatchExportConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchExportConfigurationsWithOptions(request, headers, runtime);
  }

  /**
   * @param request BatchImportConfigurationsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchImportConfigurationsResponse
   */
  async batchImportConfigurationsWithOptions(request: BatchImportConfigurationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchImportConfigurationsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.namespaceId)) {
      body["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.policy)) {
      body["Policy"] = request.policy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchImportConfigurations",
      version: "2020-02-06",
      protocol: "HTTPS",
      pathname: `/diamond-ops/pop/batch/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchImportConfigurationsResponse>(await this.callApi(params, req, runtime), new BatchImportConfigurationsResponse({}));
  }

  /**
   * @param request BatchImportConfigurationsRequest
   * @return BatchImportConfigurationsResponse
   */
  async batchImportConfigurations(request: BatchImportConfigurationsRequest): Promise<BatchImportConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchImportConfigurationsWithOptions(request, headers, runtime);
  }

  /**
   * @param request CheckConfigurationCloneRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckConfigurationCloneResponse
   */
  async checkConfigurationCloneWithOptions(request: CheckConfigurationCloneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckConfigurationCloneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    if (!Util.isUnset(request.namespaceFrom)) {
      body["NamespaceFrom"] = request.namespaceFrom;
    }

    if (!Util.isUnset(request.namespaceTo)) {
      body["NamespaceTo"] = request.namespaceTo;
    }

    if (!Util.isUnset(request.policy)) {
      body["Policy"] = request.policy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckConfigurationClone",
      version: "2020-02-06",
      protocol: "HTTPS",
      pathname: `/diamond-ops/pop/batch/checkForClone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckConfigurationCloneResponse>(await this.callApi(params, req, runtime), new CheckConfigurationCloneResponse({}));
  }

  /**
   * @param request CheckConfigurationCloneRequest
   * @return CheckConfigurationCloneResponse
   */
  async checkConfigurationClone(request: CheckConfigurationCloneRequest): Promise<CheckConfigurationCloneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkConfigurationCloneWithOptions(request, headers, runtime);
  }

  /**
   * @param request CheckConfigurationExportRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckConfigurationExportResponse
   */
  async checkConfigurationExportWithOptions(request: CheckConfigurationExportRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckConfigurationExportResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    if (!Util.isUnset(request.namespaceId)) {
      body["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckConfigurationExport",
      version: "2020-02-06",
      protocol: "HTTPS",
      pathname: `/diamond-ops/pop/batch/checkForExport`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckConfigurationExportResponse>(await this.callApi(params, req, runtime), new CheckConfigurationExportResponse({}));
  }

  /**
   * @param request CheckConfigurationExportRequest
   * @return CheckConfigurationExportResponse
   */
  async checkConfigurationExport(request: CheckConfigurationExportRequest): Promise<CheckConfigurationExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkConfigurationExportWithOptions(request, headers, runtime);
  }

  /**
   * @param request CloneConfigurationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CloneConfigurationResponse
   */
  async cloneConfigurationWithOptions(request: CloneConfigurationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CloneConfigurationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    if (!Util.isUnset(request.namespaceFrom)) {
      body["NamespaceFrom"] = request.namespaceFrom;
    }

    if (!Util.isUnset(request.namespaceTo)) {
      body["NamespaceTo"] = request.namespaceTo;
    }

    if (!Util.isUnset(request.policy)) {
      body["Policy"] = request.policy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CloneConfiguration",
      version: "2020-02-06",
      protocol: "HTTPS",
      pathname: `/diamond-ops/pop/batch/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloneConfigurationResponse>(await this.callApi(params, req, runtime), new CloneConfigurationResponse({}));
  }

  /**
   * @param request CloneConfigurationRequest
   * @return CloneConfigurationResponse
   */
  async cloneConfiguration(request: CloneConfigurationRequest): Promise<CloneConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneConfigurationWithOptions(request, headers, runtime);
  }

  /**
   * @param request CreateConfigurationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateConfigurationResponse
   */
  async createConfigurationWithOptions(request: CreateConfigurationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateConfigurationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.dataId)) {
      body["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.desc)) {
      body["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.group)) {
      body["Group"] = request.group;
    }

    if (!Util.isUnset(request.namespaceId)) {
      body["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateConfiguration",
      version: "2020-02-06",
      protocol: "HTTPS",
      pathname: `/diamond-ops/pop/configuration`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateConfigurationResponse>(await this.callApi(params, req, runtime), new CreateConfigurationResponse({}));
  }

  /**
   * @param request CreateConfigurationRequest
   * @return CreateConfigurationResponse
   */
  async createConfiguration(request: CreateConfigurationRequest): Promise<CreateConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigurationWithOptions(request, headers, runtime);
  }

  /**
   * @param request CreateNamespaceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateNamespaceResponse
   */
  async createNamespaceWithOptions(request: CreateNamespaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateNamespaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateNamespace",
      version: "2020-02-06",
      protocol: "HTTPS",
      pathname: `/diamond-ops/pop/namespace`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNamespaceResponse>(await this.callApi(params, req, runtime), new CreateNamespaceResponse({}));
  }

  /**
   * @param request CreateNamespaceRequest
   * @return CreateNamespaceResponse
   */
  async createNamespace(request: CreateNamespaceRequest): Promise<CreateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createNamespaceWithOptions(request, headers, runtime);
  }

  /**
   * @param request DeleteConfigurationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteConfigurationResponse
   */
  async deleteConfigurationWithOptions(request: DeleteConfigurationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteConfigurationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConfiguration",
      version: "2020-02-06",
      protocol: "HTTPS",
      pathname: `/diamond-ops/pop/configuration`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteConfigurationResponse>(await this.callApi(params, req, runtime), new DeleteConfigurationResponse({}));
  }

  /**
   * @param request DeleteConfigurationRequest
   * @return DeleteConfigurationResponse
   */
  async deleteConfiguration(request: DeleteConfigurationRequest): Promise<DeleteConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigurationWithOptions(request, headers, runtime);
  }

  /**
   * @param request DeleteNamespaceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteNamespaceResponse
   */
  async deleteNamespaceWithOptions(request: DeleteNamespaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteNamespaceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNamespace",
      version: "2020-02-06",
      protocol: "HTTPS",
      pathname: `/diamond-ops/pop/namespace`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteNamespaceResponse>(await this.callApi(params, req, runtime), new DeleteNamespaceResponse({}));
  }

  /**
   * @param request DeleteNamespaceRequest
   * @return DeleteNamespaceResponse
   */
  async deleteNamespace(request: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteNamespaceWithOptions(request, headers, runtime);
  }

  /**
   * @param request DeployConfigurationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeployConfigurationResponse
   */
  async deployConfigurationWithOptions(request: DeployConfigurationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeployConfigurationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.betaIps)) {
      body["BetaIps"] = request.betaIps;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.dataId)) {
      body["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.desc)) {
      body["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.group)) {
      body["Group"] = request.group;
    }

    if (!Util.isUnset(request.namespaceId)) {
      body["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeployConfiguration",
      version: "2020-02-06",
      protocol: "HTTPS",
      pathname: `/diamond-ops/pop/configuration`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployConfigurationResponse>(await this.callApi(params, req, runtime), new DeployConfigurationResponse({}));
  }

  /**
   * @param request DeployConfigurationRequest
   * @return DeployConfigurationResponse
   */
  async deployConfiguration(request: DeployConfigurationRequest): Promise<DeployConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployConfigurationWithOptions(request, headers, runtime);
  }

  /**
   * @param request DescribeConfigurationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeConfigurationResponse
   */
  async describeConfigurationWithOptions(request: DescribeConfigurationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeConfigurationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeConfiguration",
      version: "2020-02-06",
      protocol: "HTTPS",
      pathname: `/diamond-ops/pop/configuration`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeConfigurationResponse>(await this.callApi(params, req, runtime), new DescribeConfigurationResponse({}));
  }

  /**
   * @param request DescribeConfigurationRequest
   * @return DescribeConfigurationResponse
   */
  async describeConfiguration(request: DescribeConfigurationRequest): Promise<DescribeConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeConfigurationWithOptions(request, headers, runtime);
  }

  /**
   * @param request DescribeImportFileUrlRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeImportFileUrlResponse
   */
  async describeImportFileUrlWithOptions(request: DescribeImportFileUrlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeImportFileUrlResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contentType)) {
      query["ContentType"] = request.contentType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImportFileUrl",
      version: "2020-02-06",
      protocol: "HTTPS",
      pathname: `/diamond-ops/pop/batch/importFileUrl`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeImportFileUrlResponse>(await this.callApi(params, req, runtime), new DescribeImportFileUrlResponse({}));
  }

  /**
   * @param request DescribeImportFileUrlRequest
   * @return DescribeImportFileUrlResponse
   */
  async describeImportFileUrl(request: DescribeImportFileUrlRequest): Promise<DescribeImportFileUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeImportFileUrlWithOptions(request, headers, runtime);
  }

  /**
   * @param request DescribeNamespaceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeNamespaceResponse
   */
  async describeNamespaceWithOptions(request: DescribeNamespaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeNamespaceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNamespace",
      version: "2020-02-06",
      protocol: "HTTPS",
      pathname: `/diamond-ops/pop/namespace`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeNamespaceResponse>(await this.callApi(params, req, runtime), new DescribeNamespaceResponse({}));
  }

  /**
   * @param request DescribeNamespaceRequest
   * @return DescribeNamespaceResponse
   */
  async describeNamespace(request: DescribeNamespaceRequest): Promise<DescribeNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNamespaceWithOptions(request, headers, runtime);
  }

  /**
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeNamespacesResponse
   */
  async describeNamespacesWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeNamespacesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeNamespaces",
      version: "2020-02-06",
      protocol: "HTTPS",
      pathname: `/diamond-ops/pop/namespace/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeNamespacesResponse>(await this.callApi(params, req, runtime), new DescribeNamespacesResponse({}));
  }

  /**
   * @return DescribeNamespacesResponse
   */
  async describeNamespaces(): Promise<DescribeNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNamespacesWithOptions(headers, runtime);
  }

  /**
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeNamespacesWithCreateResponse
   */
  async describeNamespacesWithCreateWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeNamespacesWithCreateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeNamespacesWithCreate",
      version: "2020-02-06",
      protocol: "HTTPS",
      pathname: `/diamond-ops/pop/namespace/listWithCreate`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeNamespacesWithCreateResponse>(await this.callApi(params, req, runtime), new DescribeNamespacesWithCreateResponse({}));
  }

  /**
   * @return DescribeNamespacesWithCreateResponse
   */
  async describeNamespacesWithCreate(): Promise<DescribeNamespacesWithCreateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNamespacesWithCreateWithOptions(headers, runtime);
  }

  /**
   * @param request DescribeTraceByConfigurationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTraceByConfigurationResponse
   */
  async describeTraceByConfigurationWithOptions(request: DescribeTraceByConfigurationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeTraceByConfigurationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTraceByConfiguration",
      version: "2020-02-06",
      protocol: "HTTPS",
      pathname: `/diamond-ops/pop/trace/getByConfiguration`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeTraceByConfigurationResponse>(await this.callApi(params, req, runtime), new DescribeTraceByConfigurationResponse({}));
  }

  /**
   * @param request DescribeTraceByConfigurationRequest
   * @return DescribeTraceByConfigurationResponse
   */
  async describeTraceByConfiguration(request: DescribeTraceByConfigurationRequest): Promise<DescribeTraceByConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTraceByConfigurationWithOptions(request, headers, runtime);
  }

  /**
   * @param request UpdateNamespaceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateNamespaceResponse
   */
  async updateNamespaceWithOptions(request: UpdateNamespaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateNamespaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      body["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.namespaceName)) {
      body["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNamespace",
      version: "2020-02-06",
      protocol: "HTTPS",
      pathname: `/diamond-ops/pop/namespace`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNamespaceResponse>(await this.callApi(params, req, runtime), new UpdateNamespaceResponse({}));
  }

  /**
   * @param request UpdateNamespaceRequest
   * @return UpdateNamespaceResponse
   */
  async updateNamespace(request: UpdateNamespaceRequest): Promise<UpdateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateNamespaceWithOptions(request, headers, runtime);
  }

}
