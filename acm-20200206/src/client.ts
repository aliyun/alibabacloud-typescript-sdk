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
  namespaceId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchExportConfigurationsResponseBody extends $tea.Model {
  fileUrl?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchExportConfigurationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchExportConfigurationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchExportConfigurationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchImportConfigurationsRequest extends $tea.Model {
  namespaceId?: string;
  policy?: string;
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      policy: 'Policy',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      policy: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchImportConfigurationsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchImportConfigurationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchImportConfigurationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchImportConfigurationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConfigurationCloneRequest extends $tea.Model {
  policy?: string;
  namespaceFrom?: string;
  namespaceTo?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      namespaceFrom: 'NamespaceFrom',
      namespaceTo: 'NamespaceTo',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      namespaceFrom: 'string',
      namespaceTo: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConfigurationCloneResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: CheckConfigurationCloneResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: CheckConfigurationCloneResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConfigurationCloneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckConfigurationCloneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckConfigurationCloneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConfigurationExportRequest extends $tea.Model {
  namespaceId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConfigurationExportResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: CheckConfigurationExportResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: CheckConfigurationExportResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConfigurationExportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckConfigurationExportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckConfigurationExportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneConfigurationRequest extends $tea.Model {
  policy?: string;
  namespaceFrom?: string;
  namespaceTo?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      namespaceFrom: 'NamespaceFrom',
      namespaceTo: 'NamespaceTo',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      namespaceFrom: 'string',
      namespaceTo: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneConfigurationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: CloneConfigurationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: CloneConfigurationResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloneConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloneConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigurationRequest extends $tea.Model {
  dataId?: string;
  appName?: string;
  group?: string;
  desc?: string;
  tags?: string;
  content?: string;
  type?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      appName: 'AppName',
      group: 'Group',
      desc: 'Desc',
      tags: 'Tags',
      content: 'Content',
      type: 'Type',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      appName: 'string',
      group: 'string',
      desc: 'string',
      tags: 'string',
      content: 'string',
      type: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigurationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  message?: string;
  requestId?: string;
  namespaceId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      namespaceId: 'NamespaceId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      namespaceId: 'string',
      code: 'string',
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
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
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

export class DeployConfigurationRequest extends $tea.Model {
  dataId?: string;
  appName?: string;
  group?: string;
  desc?: string;
  tags?: string;
  content?: string;
  type?: string;
  namespaceId?: string;
  betaIps?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      appName: 'AppName',
      group: 'Group',
      desc: 'Desc',
      tags: 'Tags',
      content: 'Content',
      type: 'Type',
      namespaceId: 'NamespaceId',
      betaIps: 'BetaIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      appName: 'string',
      group: 'string',
      desc: 'string',
      tags: 'string',
      content: 'string',
      type: 'string',
      namespaceId: 'string',
      betaIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployConfigurationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeployConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  message?: string;
  requestId?: string;
  configuration?: DescribeConfigurationResponseBodyConfiguration;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      configuration: 'Configuration',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      configuration: DescribeConfigurationResponseBodyConfiguration,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  fileUrl?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportFileUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImportFileUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  message?: string;
  requestId?: string;
  code?: string;
  namespace?: DescribeNamespaceResponseBodyNamespace;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      namespace: DescribeNamespaceResponseBodyNamespace,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBody extends $tea.Model {
  namespaces?: DescribeNamespacesResponseBodyNamespaces[];
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      namespaces: 'Namespaces',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaces: { 'type': 'array', 'itemType': DescribeNamespacesResponseBodyNamespaces },
      message: 'string',
      requestId: 'string',
      code: 'string',
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

export class DescribeNamespacesWithCreateResponseBody extends $tea.Model {
  namespaces?: DescribeNamespacesWithCreateResponseBodyNamespaces[];
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      namespaces: 'Namespaces',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaces: { 'type': 'array', 'itemType': DescribeNamespacesWithCreateResponseBodyNamespaces },
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesWithCreateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNamespacesWithCreateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNamespacesWithCreateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceByConfigurationRequest extends $tea.Model {
  dataId?: string;
  group?: string;
  namespaceId?: string;
  startTs?: string;
  endTs?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
      namespaceId: 'NamespaceId',
      startTs: 'StartTs',
      endTs: 'EndTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
      namespaceId: 'string',
      startTs: 'string',
      endTs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceByConfigurationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  traces?: DescribeTraceByConfigurationResponseBodyTraces[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      traces: 'Traces',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      traces: { 'type': 'array', 'itemType': DescribeTraceByConfigurationResponseBodyTraces },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceByConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTraceByConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  type?: string;
  appName?: string;
  tags?: string;
  md5?: string;
  dataId?: string;
  content?: string;
  group?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      appName: 'AppName',
      tags: 'Tags',
      md5: 'Md5',
      dataId: 'DataId',
      content: 'Content',
      group: 'Group',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      appName: 'string',
      tags: 'string',
      md5: 'string',
      dataId: 'string',
      content: 'string',
      group: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResponseBodyNamespace extends $tea.Model {
  secretKey?: string;
  accessKey?: string;
  endpoint?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      secretKey: 'SecretKey',
      accessKey: 'AccessKey',
      endpoint: 'Endpoint',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretKey: 'string',
      accessKey: 'string',
      endpoint: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBodyNamespaces extends $tea.Model {
  type?: number;
  quota?: number;
  namespaceId?: string;
  configCount?: number;
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      quota: 'Quota',
      namespaceId: 'NamespaceId',
      configCount: 'ConfigCount',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      quota: 'number',
      namespaceId: 'string',
      configCount: 'number',
      namespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesWithCreateResponseBodyNamespaces extends $tea.Model {
  type?: number;
  quota?: number;
  namespaceId?: string;
  configCount?: number;
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      quota: 'Quota',
      namespaceId: 'NamespaceId',
      configCount: 'ConfigCount',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      quota: 'number',
      namespaceId: 'string',
      configCount: 'number',
      namespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceByConfigurationResponseBodyTracesEventGroupsEventDetails extends $tea.Model {
  type?: string;
  delay?: string;
  ts?: string;
  responseIp?: string;
  event?: string;
  ext?: string;
  dataId?: string;
  requestIp?: string;
  logDate?: string;
  handleIp?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      delay: 'Delay',
      ts: 'Ts',
      responseIp: 'ResponseIp',
      event: 'Event',
      ext: 'Ext',
      dataId: 'DataId',
      requestIp: 'RequestIp',
      logDate: 'LogDate',
      handleIp: 'HandleIp',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      delay: 'string',
      ts: 'string',
      responseIp: 'string',
      event: 'string',
      ext: 'string',
      dataId: 'string',
      requestIp: 'string',
      logDate: 'string',
      handleIp: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceByConfigurationResponseBodyTracesEventGroups extends $tea.Model {
  eventType?: string;
  eventDetails?: DescribeTraceByConfigurationResponseBodyTracesEventGroupsEventDetails[];
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      eventDetails: 'EventDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      eventDetails: { 'type': 'array', 'itemType': DescribeTraceByConfigurationResponseBodyTracesEventGroupsEventDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceByConfigurationResponseBodyTraces extends $tea.Model {
  timestamp?: number;
  eventGroups?: DescribeTraceByConfigurationResponseBodyTracesEventGroups[];
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      eventGroups: 'EventGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      eventGroups: { 'type': 'array', 'itemType': DescribeTraceByConfigurationResponseBodyTracesEventGroups },
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

  async batchExportConfigurations(request: BatchExportConfigurationsRequest): Promise<BatchExportConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchExportConfigurationsWithOptions(request, headers, runtime);
  }

  async batchExportConfigurationsWithOptions(request: BatchExportConfigurationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchExportConfigurationsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.data)) {
      query["Data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<BatchExportConfigurationsResponse>(await this.doROARequest("BatchExportConfigurations", "2020-02-06", "HTTPS", "GET", "AK", `/diamond-ops/pop/batch/export`, "json", req, runtime), new BatchExportConfigurationsResponse({}));
  }

  async batchImportConfigurations(request: BatchImportConfigurationsRequest): Promise<BatchImportConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchImportConfigurationsWithOptions(request, headers, runtime);
  }

  async batchImportConfigurationsWithOptions(request: BatchImportConfigurationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchImportConfigurationsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      body["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.policy)) {
      body["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<BatchImportConfigurationsResponse>(await this.doROARequestWithForm("BatchImportConfigurations", "2020-02-06", "HTTPS", "POST", "AK", `/diamond-ops/pop/batch/import`, "json", req, runtime), new BatchImportConfigurationsResponse({}));
  }

  async checkConfigurationClone(request: CheckConfigurationCloneRequest): Promise<CheckConfigurationCloneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkConfigurationCloneWithOptions(request, headers, runtime);
  }

  async checkConfigurationCloneWithOptions(request: CheckConfigurationCloneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckConfigurationCloneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.policy)) {
      body["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.namespaceFrom)) {
      body["NamespaceFrom"] = request.namespaceFrom;
    }

    if (!Util.isUnset(request.namespaceTo)) {
      body["NamespaceTo"] = request.namespaceTo;
    }

    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CheckConfigurationCloneResponse>(await this.doROARequestWithForm("CheckConfigurationClone", "2020-02-06", "HTTPS", "POST", "AK", `/diamond-ops/pop/batch/checkForClone`, "json", req, runtime), new CheckConfigurationCloneResponse({}));
  }

  async checkConfigurationExport(request: CheckConfigurationExportRequest): Promise<CheckConfigurationExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkConfigurationExportWithOptions(request, headers, runtime);
  }

  async checkConfigurationExportWithOptions(request: CheckConfigurationExportRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckConfigurationExportResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      body["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CheckConfigurationExportResponse>(await this.doROARequestWithForm("CheckConfigurationExport", "2020-02-06", "HTTPS", "POST", "AK", `/diamond-ops/pop/batch/checkForExport`, "json", req, runtime), new CheckConfigurationExportResponse({}));
  }

  async cloneConfiguration(request: CloneConfigurationRequest): Promise<CloneConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneConfigurationWithOptions(request, headers, runtime);
  }

  async cloneConfigurationWithOptions(request: CloneConfigurationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CloneConfigurationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.policy)) {
      body["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.namespaceFrom)) {
      body["NamespaceFrom"] = request.namespaceFrom;
    }

    if (!Util.isUnset(request.namespaceTo)) {
      body["NamespaceTo"] = request.namespaceTo;
    }

    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CloneConfigurationResponse>(await this.doROARequestWithForm("CloneConfiguration", "2020-02-06", "HTTPS", "POST", "AK", `/diamond-ops/pop/batch/clone`, "json", req, runtime), new CloneConfigurationResponse({}));
  }

  async createConfiguration(request: CreateConfigurationRequest): Promise<CreateConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigurationWithOptions(request, headers, runtime);
  }

  async createConfigurationWithOptions(request: CreateConfigurationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateConfigurationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataId)) {
      body["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.group)) {
      body["Group"] = request.group;
    }

    if (!Util.isUnset(request.desc)) {
      body["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.namespaceId)) {
      body["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateConfigurationResponse>(await this.doROARequestWithForm("CreateConfiguration", "2020-02-06", "HTTPS", "POST", "AK", `/diamond-ops/pop/configuration`, "json", req, runtime), new CreateConfigurationResponse({}));
  }

  async createNamespace(request: CreateNamespaceRequest): Promise<CreateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createNamespaceWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<CreateNamespaceResponse>(await this.doROARequestWithForm("CreateNamespace", "2020-02-06", "HTTPS", "POST", "AK", `/diamond-ops/pop/namespace`, "json", req, runtime), new CreateNamespaceResponse({}));
  }

  async deleteConfiguration(request: DeleteConfigurationRequest): Promise<DeleteConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigurationWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<DeleteConfigurationResponse>(await this.doROARequest("DeleteConfiguration", "2020-02-06", "HTTPS", "DELETE", "AK", `/diamond-ops/pop/configuration`, "json", req, runtime), new DeleteConfigurationResponse({}));
  }

  async deleteNamespace(request: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteNamespaceWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<DeleteNamespaceResponse>(await this.doROARequest("DeleteNamespace", "2020-02-06", "HTTPS", "DELETE", "AK", `/diamond-ops/pop/namespace`, "json", req, runtime), new DeleteNamespaceResponse({}));
  }

  async deployConfiguration(request: DeployConfigurationRequest): Promise<DeployConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployConfigurationWithOptions(request, headers, runtime);
  }

  async deployConfigurationWithOptions(request: DeployConfigurationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeployConfigurationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataId)) {
      body["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.group)) {
      body["Group"] = request.group;
    }

    if (!Util.isUnset(request.desc)) {
      body["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.namespaceId)) {
      body["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.betaIps)) {
      body["BetaIps"] = request.betaIps;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<DeployConfigurationResponse>(await this.doROARequestWithForm("DeployConfiguration", "2020-02-06", "HTTPS", "PUT", "AK", `/diamond-ops/pop/configuration`, "json", req, runtime), new DeployConfigurationResponse({}));
  }

  async describeConfiguration(request: DescribeConfigurationRequest): Promise<DescribeConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeConfigurationWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<DescribeConfigurationResponse>(await this.doROARequest("DescribeConfiguration", "2020-02-06", "HTTPS", "GET", "AK", `/diamond-ops/pop/configuration`, "json", req, runtime), new DescribeConfigurationResponse({}));
  }

  async describeImportFileUrl(request: DescribeImportFileUrlRequest): Promise<DescribeImportFileUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeImportFileUrlWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<DescribeImportFileUrlResponse>(await this.doROARequest("DescribeImportFileUrl", "2020-02-06", "HTTPS", "GET", "AK", `/diamond-ops/pop/batch/importFileUrl`, "json", req, runtime), new DescribeImportFileUrlResponse({}));
  }

  async describeNamespace(request: DescribeNamespaceRequest): Promise<DescribeNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNamespaceWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<DescribeNamespaceResponse>(await this.doROARequest("DescribeNamespace", "2020-02-06", "HTTPS", "GET", "AK", `/diamond-ops/pop/namespace`, "json", req, runtime), new DescribeNamespaceResponse({}));
  }

  async describeNamespaces(): Promise<DescribeNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNamespacesWithOptions(headers, runtime);
  }

  async describeNamespacesWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeNamespacesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeNamespacesResponse>(await this.doROARequest("DescribeNamespaces", "2020-02-06", "HTTPS", "GET", "AK", `/diamond-ops/pop/namespace/list`, "json", req, runtime), new DescribeNamespacesResponse({}));
  }

  async describeNamespacesWithCreate(): Promise<DescribeNamespacesWithCreateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNamespacesWithCreateWithOptions(headers, runtime);
  }

  async describeNamespacesWithCreateWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeNamespacesWithCreateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeNamespacesWithCreateResponse>(await this.doROARequest("DescribeNamespacesWithCreate", "2020-02-06", "HTTPS", "GET", "AK", `/diamond-ops/pop/namespace/listWithCreate`, "json", req, runtime), new DescribeNamespacesWithCreateResponse({}));
  }

  async describeTraceByConfiguration(request: DescribeTraceByConfigurationRequest): Promise<DescribeTraceByConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTraceByConfigurationWithOptions(request, headers, runtime);
  }

  async describeTraceByConfigurationWithOptions(request: DescribeTraceByConfigurationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeTraceByConfigurationResponse> {
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

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeTraceByConfigurationResponse>(await this.doROARequest("DescribeTraceByConfiguration", "2020-02-06", "HTTPS", "GET", "AK", `/diamond-ops/pop/trace/getByConfiguration`, "json", req, runtime), new DescribeTraceByConfigurationResponse({}));
  }

  async updateNamespace(request: UpdateNamespaceRequest): Promise<UpdateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateNamespaceWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<UpdateNamespaceResponse>(await this.doROARequestWithForm("UpdateNamespace", "2020-02-06", "HTTPS", "PUT", "AK", `/diamond-ops/pop/namespace`, "json", req, runtime), new UpdateNamespaceResponse({}));
  }

}
