// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CompileSortScriptResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompileSortScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CompileSortScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CompileSortScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestExperimentResponseBody extends $tea.Model {
  result?: CreateABTestExperimentResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CreateABTestExperimentResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestExperimentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateABTestExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateABTestExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestGroupResponseBody extends $tea.Model {
  result?: CreateABTestGroupResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CreateABTestGroupResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateABTestGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateABTestGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestSceneResponseBody extends $tea.Model {
  result?: CreateABTestSceneResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CreateABTestSceneResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateABTestSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateABTestSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponseBody extends $tea.Model {
  result?: CreateAppGroupResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CreateAppGroupResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCollectionResponseBody extends $tea.Model {
  result?: CreateDataCollectionResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CreateDataCollectionResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCollectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDataCollectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDataCollectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirstRankRequest extends $tea.Model {
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirstRankResponseBody extends $tea.Model {
  result?: CreateFirstRankResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CreateFirstRankResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirstRankResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFirstRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFirstRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInterventionDictionaryResponseBody extends $tea.Model {
  result?: CreateInterventionDictionaryResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CreateInterventionDictionaryResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInterventionDictionaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInterventionDictionaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInterventionDictionaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueryProcessorRequest extends $tea.Model {
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueryProcessorResponseBody extends $tea.Model {
  result?: CreateQueryProcessorResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CreateQueryProcessorResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueryProcessorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateQueryProcessorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateQueryProcessorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledTaskResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateScheduledTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateScheduledTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecondRankRequest extends $tea.Model {
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecondRankResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecondRankResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSecondRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSecondRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSortScriptResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSortScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSortScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSortScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserAnalyzerResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserAnalyzerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUserAnalyzerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUserAnalyzerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABTestExperimentResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABTestExperimentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteABTestExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteABTestExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABTestGroupResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABTestGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteABTestGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteABTestGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABTestSceneResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABTestSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteABTestSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteABTestSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelResponseBody extends $tea.Model {
  result?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSortScriptResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSortScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSortScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSortScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSortScriptFileResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSortScriptFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSortScriptFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSortScriptFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestExperimentResponseBody extends $tea.Model {
  result?: DescribeABTestExperimentResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: DescribeABTestExperimentResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestExperimentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeABTestExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeABTestExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestGroupResponseBody extends $tea.Model {
  result?: DescribeABTestGroupResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: DescribeABTestGroupResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeABTestGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeABTestGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestSceneResponseBody extends $tea.Model {
  result?: DescribeABTestSceneResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: DescribeABTestSceneResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeABTestSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeABTestSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBody extends $tea.Model {
  result?: DescribeAppResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: DescribeAppResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupResponseBody extends $tea.Model {
  result?: DescribeAppGroupResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: DescribeAppGroupResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupDataReportRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'startTime',
      endTime: 'endTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupDataReportResponseBody extends $tea.Model {
  result?: DescribeAppGroupDataReportResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: DescribeAppGroupDataReportResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupDataReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppGroupDataReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppGroupDataReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBody extends $tea.Model {
  result?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppStatisticsResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCollctionResponseBody extends $tea.Model {
  result?: DescribeDataCollctionResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: DescribeDataCollctionResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCollctionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataCollctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataCollctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirstRankResponseBody extends $tea.Model {
  result?: DescribeFirstRankResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: DescribeFirstRankResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirstRankResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFirstRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFirstRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInterventionDictionaryResponseBody extends $tea.Model {
  result?: DescribeInterventionDictionaryResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: DescribeInterventionDictionaryResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInterventionDictionaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInterventionDictionaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInterventionDictionaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQueryProcessorResponseBody extends $tea.Model {
  result?: DescribeQueryProcessorResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: DescribeQueryProcessorResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQueryProcessorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeQueryProcessorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeQueryProcessorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionResponseBody extends $tea.Model {
  result?: DescribeRegionResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: DescribeRegionResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  result?: DescribeRegionsResponseBodyResult[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyResult },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduledTaskResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduledTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScheduledTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScheduledTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecondRankResponseBody extends $tea.Model {
  result?: DescribeSecondRankResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: DescribeSecondRankResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecondRankResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSecondRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSecondRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowQueryStatusResponseBody extends $tea.Model {
  result?: DescribeSlowQueryStatusResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: DescribeSlowQueryStatusResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowQueryStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSlowQueryStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSlowQueryStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserAnalyzerRequest extends $tea.Model {
  with?: string;
  static names(): { [key: string]: string } {
    return {
      with: 'with',
    };
  }

  static types(): { [key: string]: any } {
    return {
      with: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserAnalyzerResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserAnalyzerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserAnalyzerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserAnalyzerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSlowQueryResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSlowQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableSlowQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableSlowQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSlowQueryResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSlowQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableSlowQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableSlowQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelProgressResponseBody extends $tea.Model {
  result?: GetModelProgressResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetModelProgressResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelProgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetModelProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetModelProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelReportResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetModelReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetModelReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptFileNamesResponseBody extends $tea.Model {
  result?: GetScriptFileNamesResponseBodyResult[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': GetScriptFileNamesResponseBodyResult },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptFileNamesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetScriptFileNamesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetScriptFileNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSortScriptResponseBody extends $tea.Model {
  result?: GetSortScriptResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetSortScriptResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSortScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSortScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSortScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSortScriptFileResponseBody extends $tea.Model {
  result?: GetSortScriptFileResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: GetSortScriptFileResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSortScriptFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSortScriptFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSortScriptFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetValidationErrorRequest extends $tea.Model {
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetValidationErrorResponseBody extends $tea.Model {
  result?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetValidationErrorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetValidationErrorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetValidationErrorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetValidationReportRequest extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetValidationReportResponseBody extends $tea.Model {
  result?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetValidationReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetValidationReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetValidationReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestExperimentsResponseBody extends $tea.Model {
  result?: ListABTestExperimentsResponseBodyResult[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListABTestExperimentsResponseBodyResult },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestExperimentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListABTestExperimentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListABTestExperimentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestFixedFlowDividersResponseBody extends $tea.Model {
  result?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestFixedFlowDividersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListABTestFixedFlowDividersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListABTestFixedFlowDividersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestGroupsResponseBody extends $tea.Model {
  result?: ListABTestGroupsResponseBodyResult[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListABTestGroupsResponseBodyResult },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListABTestGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListABTestGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestMetricsResponseBody extends $tea.Model {
  result?: ListABTestMetricsResponseBodyResult[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListABTestMetricsResponseBodyResult },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListABTestMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListABTestMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestScenesResponseBody extends $tea.Model {
  result?: ListABTestScenesResponseBodyResult[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListABTestScenesResponseBodyResult },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestScenesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListABTestScenesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListABTestScenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupErrorsRequest extends $tea.Model {
  appId?: string;
  startTime?: number;
  stopTime?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      startTime: 'startTime',
      stopTime: 'stopTime',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      startTime: 'number',
      stopTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupErrorsResponseBody extends $tea.Model {
  result?: { [key: string]: any }[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupErrorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAppGroupErrorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAppGroupErrorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupMetricsRequest extends $tea.Model {
  metricType?: string;
  startTime?: number;
  endTime?: number;
  indexes?: string;
  static names(): { [key: string]: string } {
    return {
      metricType: 'metricType',
      startTime: 'startTime',
      endTime: 'endTime',
      indexes: 'indexes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricType: 'string',
      startTime: 'number',
      endTime: 'number',
      indexes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupMetricsResponseBody extends $tea.Model {
  result?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAppGroupMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAppGroupMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  instanceId?: string;
  name?: string;
  type?: string;
  sortBy?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      instanceId: 'instanceId',
      name: 'name',
      type: 'type',
      sortBy: 'sortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      instanceId: 'string',
      name: 'string',
      type: 'string',
      sortBy: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupsResponseBody extends $tea.Model {
  result?: ListAppGroupsResponseBodyResult[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListAppGroupsResponseBodyResult },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAppGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAppGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsRequest extends $tea.Model {
  group?: boolean;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      group: 'group',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'boolean',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCollectionsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCollectionsResponseBody extends $tea.Model {
  result?: ListDataCollectionsResponseBodyResult[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListDataCollectionsResponseBodyResult },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCollectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataCollectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataCollectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployedAlgorithmModelsRequest extends $tea.Model {
  inServiceOnly?: boolean;
  algorithmType?: string;
  static names(): { [key: string]: string } {
    return {
      inServiceOnly: 'inServiceOnly',
      algorithmType: 'algorithmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inServiceOnly: 'boolean',
      algorithmType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployedAlgorithmModelsResponseBody extends $tea.Model {
  result?: ListDeployedAlgorithmModelsResponseBodyResult[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListDeployedAlgorithmModelsResponseBodyResult },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployedAlgorithmModelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeployedAlgorithmModelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeployedAlgorithmModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFirstRanksResponseBody extends $tea.Model {
  result?: ListFirstRanksResponseBodyResult[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListFirstRanksResponseBodyResult },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFirstRanksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFirstRanksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFirstRanksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionariesRequest extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  types?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'pageSize',
      pageNumber: 'pageNumber',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      types: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionariesResponseBody extends $tea.Model {
  result?: ListInterventionDictionariesResponseBodyResult[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListInterventionDictionariesResponseBodyResult },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionariesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInterventionDictionariesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInterventionDictionariesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryEntriesRequest extends $tea.Model {
  word?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      word: 'word',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      word: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryEntriesResponseBody extends $tea.Model {
  result?: ListInterventionDictionaryEntriesResponseBodyResult[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListInterventionDictionaryEntriesResponseBodyResult },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInterventionDictionaryEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInterventionDictionaryEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryNerResultsRequest extends $tea.Model {
  query?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryNerResultsResponseBody extends $tea.Model {
  result?: ListInterventionDictionaryNerResultsResponseBodyResult[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListInterventionDictionaryNerResultsResponseBodyResult },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryNerResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInterventionDictionaryNerResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInterventionDictionaryNerResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryRelatedEntitiesResponseBody extends $tea.Model {
  result?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryRelatedEntitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInterventionDictionaryRelatedEntitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInterventionDictionaryRelatedEntitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBody extends $tea.Model {
  result?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListModelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorNersRequest extends $tea.Model {
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorNersResponseBody extends $tea.Model {
  result?: ListQueryProcessorNersResponseBodyResult[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListQueryProcessorNersResponseBodyResult },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorNersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListQueryProcessorNersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListQueryProcessorNersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorsRequest extends $tea.Model {
  isActive?: number;
  static names(): { [key: string]: string } {
    return {
      isActive: 'isActive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isActive: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorsResponseBody extends $tea.Model {
  result?: ListQueryProcessorsResponseBodyResult[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListQueryProcessorsResponseBodyResult },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListQueryProcessorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListQueryProcessorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledTasksRequest extends $tea.Model {
  type?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledTasksResponseBody extends $tea.Model {
  result?: { [key: string]: any }[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListScheduledTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListScheduledTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecondRanksResponseBody extends $tea.Model {
  result?: ListSecondRanksResponseBodyResult[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListSecondRanksResponseBodyResult },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecondRanksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSecondRanksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSecondRanksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlowQueryCategoriesResponseBody extends $tea.Model {
  result?: ListSlowQueryCategoriesResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ListSlowQueryCategoriesResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlowQueryCategoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSlowQueryCategoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSlowQueryCategoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlowQueryQueriesResponseBody extends $tea.Model {
  result?: ListSlowQueryQueriesResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ListSlowQueryQueriesResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlowQueryQueriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSlowQueryQueriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSlowQueryQueriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSortExpressionsResponseBody extends $tea.Model {
  result?: ListSortExpressionsResponseBodyResult[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListSortExpressionsResponseBodyResult },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSortExpressionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSortExpressionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSortExpressionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSortScriptsResponseBody extends $tea.Model {
  result?: ListSortScriptsResponseBodyResult[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListSortScriptsResponseBodyResult },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSortScriptsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSortScriptsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSortScriptsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatisticLogsRequest extends $tea.Model {
  startTime?: number;
  stopTime?: number;
  pageNumber?: number;
  pageSize?: number;
  query?: string;
  sortBy?: string;
  distinct?: boolean;
  columns?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'startTime',
      stopTime: 'stopTime',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      query: 'query',
      sortBy: 'sortBy',
      distinct: 'distinct',
      columns: 'columns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      stopTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      sortBy: 'string',
      distinct: 'boolean',
      columns: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatisticLogsResponseBody extends $tea.Model {
  result?: { [key: string]: any }[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatisticLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListStatisticLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListStatisticLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatisticReportRequest extends $tea.Model {
  startTime?: number;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  columns?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'startTime',
      endTime: 'endTime',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      columns: 'columns',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      columns: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatisticReportResponseBody extends $tea.Model {
  result?: { [key: string]: any }[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatisticReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListStatisticReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListStatisticReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAnalyzerEntriesRequest extends $tea.Model {
  word?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      word: 'word',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      word: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAnalyzerEntriesResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAnalyzerEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserAnalyzerEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserAnalyzerEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAnalyzersRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAnalyzersResponseBody extends $tea.Model {
  result?: ListUserAnalyzersResponseBodyResult[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListUserAnalyzersResponseBodyResult },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAnalyzersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserAnalyzersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserAnalyzersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupResponseBody extends $tea.Model {
  result?: ModifyAppGroupResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ModifyAppGroupResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupQuotaResponseBody extends $tea.Model {
  result?: ModifyAppGroupQuotaResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ModifyAppGroupQuotaResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAppGroupQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAppGroupQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirstRankRequest extends $tea.Model {
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirstRankResponseBody extends $tea.Model {
  result?: ModifyFirstRankResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ModifyFirstRankResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirstRankResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFirstRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFirstRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyModelResponseBody extends $tea.Model {
  result?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQueryProcessorRequest extends $tea.Model {
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQueryProcessorResponseBody extends $tea.Model {
  result?: ModifyQueryProcessorResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ModifyQueryProcessorResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQueryProcessorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyQueryProcessorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyQueryProcessorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScheduledTaskResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScheduledTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyScheduledTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyScheduledTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecondRankRequest extends $tea.Model {
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecondRankResponseBody extends $tea.Model {
  result?: ModifySecondRankResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ModifySecondRankResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecondRankResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySecondRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySecondRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewModelRequest extends $tea.Model {
  query?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewModelResponseBody extends $tea.Model {
  result?: { [key: string]: any }[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PreviewModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PreviewModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushInterventionDictionaryEntriesResponseBody extends $tea.Model {
  result?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushInterventionDictionaryEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PushInterventionDictionaryEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PushInterventionDictionaryEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushUserAnalyzerEntriesResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushUserAnalyzerEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PushUserAnalyzerEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PushUserAnalyzerEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RankPreviewQueryResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RankPreviewQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RankPreviewQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RankPreviewQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseSortScriptResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseSortScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseSortScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseSortScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAppResponseBody extends $tea.Model {
  result?: number[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAppGroupResponseBody extends $tea.Model {
  result?: number[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAppGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDataCollectionResponseBody extends $tea.Model {
  result?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDataCollectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveDataCollectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveDataCollectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFirstRankResponseBody extends $tea.Model {
  result?: RemoveFirstRankResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: RemoveFirstRankResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFirstRankResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveFirstRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveFirstRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveInterventionDictionaryResponseBody extends $tea.Model {
  result?: RemoveInterventionDictionaryResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: RemoveInterventionDictionaryResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveInterventionDictionaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveInterventionDictionaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveInterventionDictionaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveQueryProcessorResponseBody extends $tea.Model {
  result?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveQueryProcessorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveQueryProcessorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveQueryProcessorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveScheduledTaskResponseBody extends $tea.Model {
  result?: number[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveScheduledTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveScheduledTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveScheduledTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSecondRankResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSecondRankResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveSecondRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveSecondRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserAnalyzerResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserAnalyzerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveUserAnalyzerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveUserAnalyzerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewAppGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewAppGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenewAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenewAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceAppGroupCommodityCodeResponseBody extends $tea.Model {
  result?: ReplaceAppGroupCommodityCodeResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ReplaceAppGroupCommodityCodeResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceAppGroupCommodityCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReplaceAppGroupCommodityCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReplaceAppGroupCommodityCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSortScriptFileResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSortScriptFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveSortScriptFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveSortScriptFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSlowQueryAnalyzerResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSlowQueryAnalyzerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartSlowQueryAnalyzerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartSlowQueryAnalyzerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainModelResponseBody extends $tea.Model {
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TrainModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TrainModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestExperimentResponseBody extends $tea.Model {
  result?: UpdateABTestExperimentResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: UpdateABTestExperimentResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestExperimentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateABTestExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateABTestExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestFixedFlowDividersResponseBody extends $tea.Model {
  result?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestFixedFlowDividersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateABTestFixedFlowDividersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateABTestFixedFlowDividersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestGroupResponseBody extends $tea.Model {
  result?: UpdateABTestGroupResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: UpdateABTestGroupResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateABTestGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateABTestGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestSceneResponseBody extends $tea.Model {
  result?: UpdateABTestSceneResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: UpdateABTestSceneResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateABTestSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateABTestSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFetchFieldsRequest extends $tea.Model {
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFetchFieldsResponseBody extends $tea.Model {
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFetchFieldsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFetchFieldsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFetchFieldsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSummariesRequest extends $tea.Model {
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSummariesResponseBody extends $tea.Model {
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSummariesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSummariesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSummariesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestExperimentResponseBodyResult extends $tea.Model {
  created?: number;
  params?: { [key: string]: any };
  traffic?: number;
  online?: boolean;
  name?: string;
  updated?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      params: 'params',
      traffic: 'traffic',
      online: 'online',
      name: 'name',
      updated: 'updated',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      traffic: 'number',
      online: 'boolean',
      name: 'string',
      updated: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestGroupResponseBodyResult extends $tea.Model {
  created?: number;
  status?: number;
  updated?: number;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      status: 'status',
      updated: 'updated',
      name: 'name',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      status: 'number',
      updated: 'number',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestSceneResponseBodyResult extends $tea.Model {
  created?: number;
  values?: string[];
  status?: number;
  updated?: number;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      values: 'values',
      status: 'status',
      updated: 'updated',
      name: 'name',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      values: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
      updated: 'number',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponseBodyResultQuota extends $tea.Model {
  spec?: string;
  docSize?: number;
  computeResource?: number;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      docSize: 'docSize',
      computeResource: 'computeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      docSize: 'number',
      computeResource: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponseBodyResult extends $tea.Model {
  created?: number;
  currentVersion?: string;
  pendingSecondRankAlgoDeploymentId?: number;
  lockMode?: string;
  updated?: number;
  id?: string;
  chargeType?: string;
  hasPendingQuotaReviewTask?: number;
  secondRankAlgoDeploymentId?: number;
  quota?: CreateAppGroupResponseBodyResultQuota;
  name?: string;
  processingOrderId?: string;
  instanceId?: string;
  type?: string;
  chargingWay?: number;
  status?: string;
  projectId?: string;
  commodityCode?: string;
  switchedTime?: number;
  expireOn?: string;
  description?: string;
  firstRankAlgoDeploymentId?: number;
  lockedByExpiration?: number;
  produced?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      currentVersion: 'currentVersion',
      pendingSecondRankAlgoDeploymentId: 'pendingSecondRankAlgoDeploymentId',
      lockMode: 'lockMode',
      updated: 'updated',
      id: 'id',
      chargeType: 'chargeType',
      hasPendingQuotaReviewTask: 'hasPendingQuotaReviewTask',
      secondRankAlgoDeploymentId: 'secondRankAlgoDeploymentId',
      quota: 'quota',
      name: 'name',
      processingOrderId: 'processingOrderId',
      instanceId: 'instanceId',
      type: 'type',
      chargingWay: 'chargingWay',
      status: 'status',
      projectId: 'projectId',
      commodityCode: 'commodityCode',
      switchedTime: 'switchedTime',
      expireOn: 'expireOn',
      description: 'description',
      firstRankAlgoDeploymentId: 'firstRankAlgoDeploymentId',
      lockedByExpiration: 'lockedByExpiration',
      produced: 'produced',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      currentVersion: 'string',
      pendingSecondRankAlgoDeploymentId: 'number',
      lockMode: 'string',
      updated: 'number',
      id: 'string',
      chargeType: 'string',
      hasPendingQuotaReviewTask: 'number',
      secondRankAlgoDeploymentId: 'number',
      quota: CreateAppGroupResponseBodyResultQuota,
      name: 'string',
      processingOrderId: 'string',
      instanceId: 'string',
      type: 'string',
      chargingWay: 'number',
      status: 'string',
      projectId: 'string',
      commodityCode: 'string',
      switchedTime: 'number',
      expireOn: 'string',
      description: 'string',
      firstRankAlgoDeploymentId: 'number',
      lockedByExpiration: 'number',
      produced: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCollectionResponseBodyResult extends $tea.Model {
  created?: number;
  dataCollectionType?: string;
  type?: string;
  industryName?: string;
  status?: number;
  updated?: number;
  name?: string;
  sundialId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      dataCollectionType: 'dataCollectionType',
      type: 'type',
      industryName: 'industryName',
      status: 'status',
      updated: 'updated',
      name: 'name',
      sundialId: 'sundialId',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      dataCollectionType: 'string',
      type: 'string',
      industryName: 'string',
      status: 'number',
      updated: 'number',
      name: 'string',
      sundialId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirstRankResponseBodyResultMeta extends $tea.Model {
  arg?: string;
  attribute?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      arg: 'arg',
      attribute: 'attribute',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      attribute: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirstRankResponseBodyResult extends $tea.Model {
  active?: boolean;
  name?: string;
  meta?: CreateFirstRankResponseBodyResultMeta[];
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      name: 'name',
      meta: 'meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      name: 'string',
      meta: { 'type': 'array', 'itemType': CreateFirstRankResponseBodyResultMeta },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInterventionDictionaryResponseBodyResult extends $tea.Model {
  created?: string;
  type?: string;
  analyzer?: string;
  updated?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      type: 'type',
      analyzer: 'analyzer',
      updated: 'updated',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'string',
      type: 'string',
      analyzer: 'string',
      updated: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueryProcessorResponseBodyResult extends $tea.Model {
  created?: number;
  active?: boolean;
  domain?: string;
  indexes?: string[];
  processors?: { [key: string]: any }[];
  updated?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      active: 'active',
      domain: 'domain',
      indexes: 'indexes',
      processors: 'processors',
      updated: 'updated',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      active: 'boolean',
      domain: 'string',
      indexes: { 'type': 'array', 'itemType': 'string' },
      processors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      updated: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestExperimentResponseBodyResultParams extends $tea.Model {
  firstFormulaName?: string;
  static names(): { [key: string]: string } {
    return {
      firstFormulaName: 'first_formula_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstFormulaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestExperimentResponseBodyResult extends $tea.Model {
  created?: number;
  params?: DescribeABTestExperimentResponseBodyResultParams;
  traffic?: number;
  online?: boolean;
  name?: string;
  updated?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      params: 'params',
      traffic: 'traffic',
      online: 'online',
      name: 'name',
      updated: 'updated',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      params: DescribeABTestExperimentResponseBodyResultParams,
      traffic: 'number',
      online: 'boolean',
      name: 'string',
      updated: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestGroupResponseBodyResult extends $tea.Model {
  created?: number;
  status?: number;
  updated?: number;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      status: 'status',
      updated: 'updated',
      name: 'name',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      status: 'number',
      updated: 'number',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestSceneResponseBodyResult extends $tea.Model {
  created?: number;
  values?: string[];
  status?: number;
  updated?: number;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      values: 'values',
      status: 'status',
      updated: 'updated',
      name: 'name',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      values: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
      updated: 'number',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultQuota extends $tea.Model {
  spec?: string;
  qps?: number;
  docSize?: number;
  computeResource?: number;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      qps: 'qps',
      docSize: 'docSize',
      computeResource: 'computeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      qps: 'number',
      docSize: 'number',
      computeResource: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResult extends $tea.Model {
  created?: number;
  clusterName?: string;
  autoSwitch?: boolean;
  type?: string;
  status?: string;
  schema?: { [key: string]: any };
  progressPercent?: number;
  id?: string;
  algoDeploymentId?: number;
  description?: string;
  fetchFields?: string[];
  quota?: DescribeAppResponseBodyResultQuota;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      clusterName: 'clusterName',
      autoSwitch: 'autoSwitch',
      type: 'type',
      status: 'status',
      schema: 'schema',
      progressPercent: 'progressPercent',
      id: 'id',
      algoDeploymentId: 'algoDeploymentId',
      description: 'description',
      fetchFields: 'fetchFields',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      clusterName: 'string',
      autoSwitch: 'boolean',
      type: 'string',
      status: 'string',
      schema: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      progressPercent: 'number',
      id: 'string',
      algoDeploymentId: 'number',
      description: 'string',
      fetchFields: { 'type': 'array', 'itemType': 'string' },
      quota: DescribeAppResponseBodyResultQuota,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupResponseBodyResultQuota extends $tea.Model {
  spec?: string;
  docSize?: number;
  computeResource?: number;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      docSize: 'docSize',
      computeResource: 'computeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      docSize: 'number',
      computeResource: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupResponseBodyResult extends $tea.Model {
  created?: number;
  currentVersion?: string;
  pendingSecondRankAlgoDeploymentId?: number;
  lockMode?: string;
  updated?: number;
  id?: string;
  chargeType?: string;
  hasPendingQuotaReviewTask?: number;
  secondRankAlgoDeploymentId?: number;
  quota?: DescribeAppGroupResponseBodyResultQuota;
  name?: string;
  processingOrderId?: string;
  instanceId?: string;
  type?: string;
  chargingWay?: number;
  status?: string;
  projectId?: string;
  commodityCode?: string;
  switchedTime?: number;
  expireOn?: string;
  description?: string;
  firstRankAlgoDeploymentId?: number;
  lockedByExpiration?: number;
  produced?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      currentVersion: 'currentVersion',
      pendingSecondRankAlgoDeploymentId: 'pendingSecondRankAlgoDeploymentId',
      lockMode: 'lockMode',
      updated: 'updated',
      id: 'id',
      chargeType: 'chargeType',
      hasPendingQuotaReviewTask: 'hasPendingQuotaReviewTask',
      secondRankAlgoDeploymentId: 'secondRankAlgoDeploymentId',
      quota: 'quota',
      name: 'name',
      processingOrderId: 'processingOrderId',
      instanceId: 'instanceId',
      type: 'type',
      chargingWay: 'chargingWay',
      status: 'status',
      projectId: 'projectId',
      commodityCode: 'commodityCode',
      switchedTime: 'switchedTime',
      expireOn: 'expireOn',
      description: 'description',
      firstRankAlgoDeploymentId: 'firstRankAlgoDeploymentId',
      lockedByExpiration: 'lockedByExpiration',
      produced: 'produced',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      currentVersion: 'string',
      pendingSecondRankAlgoDeploymentId: 'number',
      lockMode: 'string',
      updated: 'number',
      id: 'string',
      chargeType: 'string',
      hasPendingQuotaReviewTask: 'number',
      secondRankAlgoDeploymentId: 'number',
      quota: DescribeAppGroupResponseBodyResultQuota,
      name: 'string',
      processingOrderId: 'string',
      instanceId: 'string',
      type: 'string',
      chargingWay: 'number',
      status: 'string',
      projectId: 'string',
      commodityCode: 'string',
      switchedTime: 'number',
      expireOn: 'string',
      description: 'string',
      firstRankAlgoDeploymentId: 'number',
      lockedByExpiration: 'number',
      produced: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupDataReportResponseBodyResultReceivedSampleMessage extends $tea.Model {
  eventId?: number;
  arg3?: string;
  arg1?: string;
  sdkVersion?: string;
  userId?: string;
  page?: string;
  args?: string;
  sessionId?: string;
  sdkType?: string;
  clientIp?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'eventId',
      arg3: 'arg3',
      arg1: 'arg1',
      sdkVersion: 'sdkVersion',
      userId: 'userId',
      page: 'page',
      args: 'args',
      sessionId: 'sessionId',
      sdkType: 'sdkType',
      clientIp: 'clientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'number',
      arg3: 'string',
      arg1: 'string',
      sdkVersion: 'string',
      userId: 'string',
      page: 'string',
      args: 'string',
      sessionId: 'string',
      sdkType: 'string',
      clientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupDataReportResponseBodyResultReceivedSample extends $tea.Model {
  receivedTimeMs?: number;
  message?: DescribeAppGroupDataReportResponseBodyResultReceivedSampleMessage;
  static names(): { [key: string]: string } {
    return {
      receivedTimeMs: 'receivedTimeMs',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receivedTimeMs: 'number',
      message: DescribeAppGroupDataReportResponseBodyResultReceivedSampleMessage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupDataReportResponseBodyResult extends $tea.Model {
  receivedSample?: DescribeAppGroupDataReportResponseBodyResultReceivedSample[];
  receivedCount?: number;
  static names(): { [key: string]: string } {
    return {
      receivedSample: 'receivedSample',
      receivedCount: 'receivedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receivedSample: { 'type': 'array', 'itemType': DescribeAppGroupDataReportResponseBodyResultReceivedSample },
      receivedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCollctionResponseBodyResult extends $tea.Model {
  created?: number;
  dataCollectionType?: string;
  type?: string;
  industryName?: string;
  status?: number;
  updated?: number;
  name?: string;
  sundialId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      dataCollectionType: 'dataCollectionType',
      type: 'type',
      industryName: 'industryName',
      status: 'status',
      updated: 'updated',
      name: 'name',
      sundialId: 'sundialId',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      dataCollectionType: 'string',
      type: 'string',
      industryName: 'string',
      status: 'number',
      updated: 'number',
      name: 'string',
      sundialId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirstRankResponseBodyResultMeta extends $tea.Model {
  arg?: string;
  attribute?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      arg: 'arg',
      attribute: 'attribute',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      attribute: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirstRankResponseBodyResult extends $tea.Model {
  active?: boolean;
  description?: string;
  name?: string;
  meta?: DescribeFirstRankResponseBodyResultMeta[];
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
      name: 'name',
      meta: 'meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      name: 'string',
      meta: { 'type': 'array', 'itemType': DescribeFirstRankResponseBodyResultMeta },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInterventionDictionaryResponseBodyResult extends $tea.Model {
  created?: string;
  type?: string;
  analyzer?: string;
  updated?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      type: 'type',
      analyzer: 'analyzer',
      updated: 'updated',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'string',
      type: 'string',
      analyzer: 'string',
      updated: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQueryProcessorResponseBodyResult extends $tea.Model {
  created?: number;
  active?: boolean;
  domain?: string;
  indexes?: string[];
  processors?: { [key: string]: any }[];
  updated?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      active: 'active',
      domain: 'domain',
      indexes: 'indexes',
      processors: 'processors',
      updated: 'updated',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      active: 'boolean',
      domain: 'string',
      indexes: { 'type': 'array', 'itemType': 'string' },
      processors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      updated: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionResponseBodyResult extends $tea.Model {
  regionId?: string;
  config?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      config: 'config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyResult extends $tea.Model {
  regionId?: string;
  endpoint?: string;
  localName?: string;
  consoleUrl?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      endpoint: 'endpoint',
      localName: 'localName',
      consoleUrl: 'consoleUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      endpoint: 'string',
      localName: 'string',
      consoleUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecondRankResponseBodyResult extends $tea.Model {
  created?: number;
  active?: boolean;
  isDefault?: string;
  isSys?: string;
  description?: string;
  updated?: number;
  name?: string;
  meta?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      active: 'active',
      isDefault: 'isDefault',
      isSys: 'isSys',
      description: 'description',
      updated: 'updated',
      name: 'name',
      meta: 'meta',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      active: 'boolean',
      isDefault: 'string',
      isSys: 'string',
      description: 'string',
      updated: 'number',
      name: 'string',
      meta: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowQueryStatusResponseBodyResult extends $tea.Model {
  region?: string;
  status?: string;
  appGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'region',
      status: 'status',
      appGroupId: 'appGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      status: 'string',
      appGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelProgressResponseBodyResult extends $tea.Model {
  status?: string;
  progress?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      progress: 'progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      progress: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptFileNamesResponseBodyResult extends $tea.Model {
  fileName?: string;
  createTime?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      createTime: 'createTime',
      modifyTime: 'modifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      createTime: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSortScriptResponseBodyResult extends $tea.Model {
  type?: string;
  scope?: string;
  createTime?: string;
  status?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      scope: 'scope',
      createTime: 'createTime',
      status: 'status',
      modifyTime: 'modifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      scope: 'string',
      createTime: 'string',
      status: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSortScriptFileResponseBodyResult extends $tea.Model {
  content?: string;
  createTime?: string;
  modifyTime?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createTime: 'createTime',
      modifyTime: 'modifyTime',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      modifyTime: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestExperimentsResponseBodyResult extends $tea.Model {
  created?: number;
  params?: { [key: string]: any };
  traffic?: number;
  online?: boolean;
  name?: string;
  updated?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      params: 'params',
      traffic: 'traffic',
      online: 'online',
      name: 'name',
      updated: 'updated',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      traffic: 'number',
      online: 'boolean',
      name: 'string',
      updated: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestGroupsResponseBodyResult extends $tea.Model {
  created?: number;
  status?: number;
  updated?: number;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      status: 'status',
      updated: 'updated',
      name: 'name',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      status: 'number',
      updated: 'number',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestMetricsResponseBodyResult extends $tea.Model {
  zeroHitRate?: number;
  ctr?: number;
  experimentName?: string;
  date?: string;
  ipvUv?: number;
  ipv?: number;
  uv?: number;
  pv?: number;
  static names(): { [key: string]: string } {
    return {
      zeroHitRate: 'zeroHitRate',
      ctr: 'ctr',
      experimentName: 'experimentName',
      date: 'date',
      ipvUv: 'ipvUv',
      ipv: 'ipv',
      uv: 'uv',
      pv: 'pv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zeroHitRate: 'number',
      ctr: 'number',
      experimentName: 'string',
      date: 'string',
      ipvUv: 'number',
      ipv: 'number',
      uv: 'number',
      pv: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestScenesResponseBodyResult extends $tea.Model {
  created?: number;
  values?: string[];
  status?: number;
  updated?: number;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      values: 'values',
      status: 'status',
      updated: 'updated',
      name: 'name',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      values: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
      updated: 'number',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupsResponseBodyResultQuota extends $tea.Model {
  spec?: string;
  docSize?: number;
  computeResource?: number;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      docSize: 'docSize',
      computeResource: 'computeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      docSize: 'number',
      computeResource: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupsResponseBodyResult extends $tea.Model {
  created?: number;
  currentVersion?: string;
  pendingSecondRankAlgoDeploymentId?: number;
  lockMode?: string;
  updated?: number;
  id?: string;
  chargeType?: string;
  hasPendingQuotaReviewTask?: number;
  secondRankAlgoDeploymentId?: number;
  quota?: ListAppGroupsResponseBodyResultQuota;
  name?: string;
  processingOrderId?: string;
  instanceId?: string;
  type?: string;
  chargingWay?: number;
  status?: string;
  projectId?: string;
  commodityCode?: string;
  switchedTime?: number;
  expireOn?: string;
  description?: string;
  firstRankAlgoDeploymentId?: number;
  lockedByExpiration?: number;
  produced?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      currentVersion: 'currentVersion',
      pendingSecondRankAlgoDeploymentId: 'pendingSecondRankAlgoDeploymentId',
      lockMode: 'lockMode',
      updated: 'updated',
      id: 'id',
      chargeType: 'chargeType',
      hasPendingQuotaReviewTask: 'hasPendingQuotaReviewTask',
      secondRankAlgoDeploymentId: 'secondRankAlgoDeploymentId',
      quota: 'quota',
      name: 'name',
      processingOrderId: 'processingOrderId',
      instanceId: 'instanceId',
      type: 'type',
      chargingWay: 'chargingWay',
      status: 'status',
      projectId: 'projectId',
      commodityCode: 'commodityCode',
      switchedTime: 'switchedTime',
      expireOn: 'expireOn',
      description: 'description',
      firstRankAlgoDeploymentId: 'firstRankAlgoDeploymentId',
      lockedByExpiration: 'lockedByExpiration',
      produced: 'produced',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      currentVersion: 'string',
      pendingSecondRankAlgoDeploymentId: 'number',
      lockMode: 'string',
      updated: 'number',
      id: 'string',
      chargeType: 'string',
      hasPendingQuotaReviewTask: 'number',
      secondRankAlgoDeploymentId: 'number',
      quota: ListAppGroupsResponseBodyResultQuota,
      name: 'string',
      processingOrderId: 'string',
      instanceId: 'string',
      type: 'string',
      chargingWay: 'number',
      status: 'string',
      projectId: 'string',
      commodityCode: 'string',
      switchedTime: 'number',
      expireOn: 'string',
      description: 'string',
      firstRankAlgoDeploymentId: 'number',
      lockedByExpiration: 'number',
      produced: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCollectionsResponseBodyResult extends $tea.Model {
  created?: number;
  dataCollectionType?: string;
  type?: string;
  industryName?: string;
  status?: number;
  updated?: number;
  name?: string;
  sundialId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      dataCollectionType: 'dataCollectionType',
      type: 'type',
      industryName: 'industryName',
      status: 'status',
      updated: 'updated',
      name: 'name',
      sundialId: 'sundialId',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      dataCollectionType: 'string',
      type: 'string',
      industryName: 'string',
      status: 'number',
      updated: 'number',
      name: 'string',
      sundialId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployedAlgorithmModelsResponseBodyResultModels extends $tea.Model {
  modelName?: string;
  projectId?: number;
  modelId?: number;
  algorithmType?: string;
  status?: string;
  progress?: number;
  static names(): { [key: string]: string } {
    return {
      modelName: 'modelName',
      projectId: 'projectId',
      modelId: 'modelId',
      algorithmType: 'algorithmType',
      status: 'status',
      progress: 'progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      projectId: 'number',
      modelId: 'number',
      algorithmType: 'string',
      status: 'string',
      progress: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployedAlgorithmModelsResponseBodyResult extends $tea.Model {
  apps?: string[];
  appGroupName?: string;
  models?: ListDeployedAlgorithmModelsResponseBodyResultModels[];
  gmtModified?: string;
  status?: string;
  scene?: string;
  gmtCreate?: string;
  id?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      apps: 'apps',
      appGroupName: 'appGroupName',
      models: 'models',
      gmtModified: 'gmtModified',
      status: 'status',
      scene: 'scene',
      gmtCreate: 'gmtCreate',
      id: 'id',
      desc: 'desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: { 'type': 'array', 'itemType': 'string' },
      appGroupName: 'string',
      models: { 'type': 'array', 'itemType': ListDeployedAlgorithmModelsResponseBodyResultModels },
      gmtModified: 'string',
      status: 'string',
      scene: 'string',
      gmtCreate: 'string',
      id: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFirstRanksResponseBodyResultMeta extends $tea.Model {
  arg?: string;
  attribute?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      arg: 'arg',
      attribute: 'attribute',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      attribute: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFirstRanksResponseBodyResult extends $tea.Model {
  created?: number;
  active?: boolean;
  description?: string;
  updated?: number;
  name?: string;
  meta?: ListFirstRanksResponseBodyResultMeta[];
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      active: 'active',
      description: 'description',
      updated: 'updated',
      name: 'name',
      meta: 'meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      active: 'boolean',
      description: 'string',
      updated: 'number',
      name: 'string',
      meta: { 'type': 'array', 'itemType': ListFirstRanksResponseBodyResultMeta },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionariesResponseBodyResult extends $tea.Model {
  created?: number;
  type?: string;
  analyzer?: string;
  name?: string;
  updated?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      type: 'type',
      analyzer: 'analyzer',
      name: 'name',
      updated: 'updated',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      type: 'string',
      analyzer: 'string',
      name: 'string',
      updated: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryEntriesResponseBodyResultTokens extends $tea.Model {
  tagLabel?: string;
  tag?: string;
  token?: string;
  order?: number;
  static names(): { [key: string]: string } {
    return {
      tagLabel: 'tagLabel',
      tag: 'tag',
      token: 'token',
      order: 'order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagLabel: 'string',
      tag: 'string',
      token: 'string',
      order: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryEntriesResponseBodyResult extends $tea.Model {
  cmd?: string;
  created?: number;
  word?: string;
  tokens?: ListInterventionDictionaryEntriesResponseBodyResultTokens[];
  relevance?: { [key: string]: any };
  status?: string;
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      cmd: 'cmd',
      created: 'created',
      word: 'word',
      tokens: 'tokens',
      relevance: 'relevance',
      status: 'status',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmd: 'string',
      created: 'number',
      word: 'string',
      tokens: { 'type': 'array', 'itemType': ListInterventionDictionaryEntriesResponseBodyResultTokens },
      relevance: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryNerResultsResponseBodyResult extends $tea.Model {
  tagLabel?: string;
  tag?: string;
  token?: string;
  order?: number;
  static names(): { [key: string]: string } {
    return {
      tagLabel: 'tagLabel',
      tag: 'tag',
      token: 'token',
      order: 'order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagLabel: 'string',
      tag: 'string',
      token: 'string',
      order: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorNersResponseBodyResult extends $tea.Model {
  label?: string;
  tag?: string;
  order?: number;
  priority?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      tag: 'tag',
      order: 'order',
      priority: 'priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      tag: 'string',
      order: 'number',
      priority: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorsResponseBodyResult extends $tea.Model {
  created?: number;
  active?: boolean;
  domain?: string;
  indexes?: string[];
  processors?: { [key: string]: any }[];
  updated?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      active: 'active',
      domain: 'domain',
      indexes: 'indexes',
      processors: 'processors',
      updated: 'updated',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      active: 'boolean',
      domain: 'string',
      indexes: { 'type': 'array', 'itemType': 'string' },
      processors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      updated: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecondRanksResponseBodyResult extends $tea.Model {
  created?: number;
  active?: boolean;
  isDefault?: string;
  isSys?: string;
  description?: string;
  updated?: number;
  name?: string;
  meta?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      active: 'active',
      isDefault: 'isDefault',
      isSys: 'isSys',
      description: 'description',
      updated: 'updated',
      name: 'name',
      meta: 'meta',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      active: 'boolean',
      isDefault: 'string',
      isSys: 'string',
      description: 'string',
      updated: 'number',
      name: 'string',
      meta: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlowQueryCategoriesResponseBodyResult extends $tea.Model {
  start?: number;
  analyzeStatus?: string;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      start: 'start',
      analyzeStatus: 'analyzeStatus',
      end: 'end',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'number',
      analyzeStatus: 'string',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlowQueryQueriesResponseBodyResult extends $tea.Model {
  index?: number;
  appQuery?: string;
  start?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      appQuery: 'appQuery',
      start: 'start',
      end: 'end',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      appQuery: 'string',
      start: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSortExpressionsResponseBodyResult extends $tea.Model {
  created?: number;
  active?: boolean;
  description?: string;
  updated?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      active: 'active',
      description: 'description',
      updated: 'updated',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      active: 'boolean',
      description: 'string',
      updated: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSortScriptsResponseBodyResult extends $tea.Model {
  type?: string;
  scope?: string;
  createTime?: string;
  status?: string;
  modifyTime?: string;
  scriptName?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      scope: 'scope',
      createTime: 'createTime',
      status: 'status',
      modifyTime: 'modifyTime',
      scriptName: 'scriptName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      scope: 'string',
      createTime: 'string',
      status: 'string',
      modifyTime: 'string',
      scriptName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAnalyzersResponseBodyResultDicts extends $tea.Model {
  created?: number;
  entriesCount?: number;
  type?: string;
  entriesLimit?: number;
  available?: boolean;
  updated?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      entriesCount: 'entriesCount',
      type: 'type',
      entriesLimit: 'entriesLimit',
      available: 'available',
      updated: 'updated',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      entriesCount: 'number',
      type: 'string',
      entriesLimit: 'number',
      available: 'boolean',
      updated: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAnalyzersResponseBodyResult extends $tea.Model {
  created?: number;
  available?: boolean;
  dicts?: ListUserAnalyzersResponseBodyResultDicts[];
  name?: string;
  updated?: number;
  id?: string;
  business?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      available: 'available',
      dicts: 'dicts',
      name: 'name',
      updated: 'updated',
      id: 'id',
      business: 'business',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      available: 'boolean',
      dicts: { 'type': 'array', 'itemType': ListUserAnalyzersResponseBodyResultDicts },
      name: 'string',
      updated: 'number',
      id: 'string',
      business: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupResponseBodyResultQuota extends $tea.Model {
  spec?: string;
  docSize?: number;
  computeResource?: number;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      docSize: 'docSize',
      computeResource: 'computeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      docSize: 'number',
      computeResource: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupResponseBodyResult extends $tea.Model {
  created?: number;
  currentVersion?: string;
  pendingSecondRankAlgoDeploymentId?: number;
  lockMode?: string;
  updated?: number;
  id?: string;
  chargeType?: string;
  hasPendingQuotaReviewTask?: number;
  secondRankAlgoDeploymentId?: number;
  quota?: ModifyAppGroupResponseBodyResultQuota;
  name?: string;
  processingOrderId?: string;
  instanceId?: string;
  type?: string;
  chargingWay?: number;
  status?: string;
  projectId?: string;
  commodityCode?: string;
  switchedTime?: number;
  expireOn?: string;
  description?: string;
  firstRankAlgoDeploymentId?: number;
  lockedByExpiration?: number;
  produced?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      currentVersion: 'currentVersion',
      pendingSecondRankAlgoDeploymentId: 'pendingSecondRankAlgoDeploymentId',
      lockMode: 'lockMode',
      updated: 'updated',
      id: 'id',
      chargeType: 'chargeType',
      hasPendingQuotaReviewTask: 'hasPendingQuotaReviewTask',
      secondRankAlgoDeploymentId: 'secondRankAlgoDeploymentId',
      quota: 'quota',
      name: 'name',
      processingOrderId: 'processingOrderId',
      instanceId: 'instanceId',
      type: 'type',
      chargingWay: 'chargingWay',
      status: 'status',
      projectId: 'projectId',
      commodityCode: 'commodityCode',
      switchedTime: 'switchedTime',
      expireOn: 'expireOn',
      description: 'description',
      firstRankAlgoDeploymentId: 'firstRankAlgoDeploymentId',
      lockedByExpiration: 'lockedByExpiration',
      produced: 'produced',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      currentVersion: 'string',
      pendingSecondRankAlgoDeploymentId: 'number',
      lockMode: 'string',
      updated: 'number',
      id: 'string',
      chargeType: 'string',
      hasPendingQuotaReviewTask: 'number',
      secondRankAlgoDeploymentId: 'number',
      quota: ModifyAppGroupResponseBodyResultQuota,
      name: 'string',
      processingOrderId: 'string',
      instanceId: 'string',
      type: 'string',
      chargingWay: 'number',
      status: 'string',
      projectId: 'string',
      commodityCode: 'string',
      switchedTime: 'number',
      expireOn: 'string',
      description: 'string',
      firstRankAlgoDeploymentId: 'number',
      lockedByExpiration: 'number',
      produced: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupQuotaResponseBodyResultQuota extends $tea.Model {
  spec?: string;
  docSize?: number;
  computeResource?: number;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      docSize: 'docSize',
      computeResource: 'computeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      docSize: 'number',
      computeResource: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupQuotaResponseBodyResult extends $tea.Model {
  created?: number;
  currentVersion?: string;
  pendingSecondRankAlgoDeploymentId?: number;
  lockMode?: string;
  updated?: number;
  id?: string;
  chargeType?: string;
  hasPendingQuotaReviewTask?: number;
  secondRankAlgoDeploymentId?: number;
  quota?: ModifyAppGroupQuotaResponseBodyResultQuota;
  name?: string;
  processingOrderId?: string;
  instanceId?: string;
  type?: string;
  chargingWay?: number;
  status?: string;
  projectId?: string;
  commodityCode?: string;
  switchedTime?: number;
  expireOn?: string;
  description?: string;
  firstRankAlgoDeploymentId?: number;
  lockedByExpiration?: number;
  produced?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      currentVersion: 'currentVersion',
      pendingSecondRankAlgoDeploymentId: 'pendingSecondRankAlgoDeploymentId',
      lockMode: 'lockMode',
      updated: 'updated',
      id: 'id',
      chargeType: 'chargeType',
      hasPendingQuotaReviewTask: 'hasPendingQuotaReviewTask',
      secondRankAlgoDeploymentId: 'secondRankAlgoDeploymentId',
      quota: 'quota',
      name: 'name',
      processingOrderId: 'processingOrderId',
      instanceId: 'instanceId',
      type: 'type',
      chargingWay: 'chargingWay',
      status: 'status',
      projectId: 'projectId',
      commodityCode: 'commodityCode',
      switchedTime: 'switchedTime',
      expireOn: 'expireOn',
      description: 'description',
      firstRankAlgoDeploymentId: 'firstRankAlgoDeploymentId',
      lockedByExpiration: 'lockedByExpiration',
      produced: 'produced',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      currentVersion: 'string',
      pendingSecondRankAlgoDeploymentId: 'number',
      lockMode: 'string',
      updated: 'number',
      id: 'string',
      chargeType: 'string',
      hasPendingQuotaReviewTask: 'number',
      secondRankAlgoDeploymentId: 'number',
      quota: ModifyAppGroupQuotaResponseBodyResultQuota,
      name: 'string',
      processingOrderId: 'string',
      instanceId: 'string',
      type: 'string',
      chargingWay: 'number',
      status: 'string',
      projectId: 'string',
      commodityCode: 'string',
      switchedTime: 'number',
      expireOn: 'string',
      description: 'string',
      firstRankAlgoDeploymentId: 'number',
      lockedByExpiration: 'number',
      produced: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirstRankResponseBodyResultMeta extends $tea.Model {
  arg?: string;
  attribute?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      arg: 'arg',
      attribute: 'attribute',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      attribute: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirstRankResponseBodyResult extends $tea.Model {
  active?: boolean;
  description?: string;
  name?: string;
  meta?: ModifyFirstRankResponseBodyResultMeta[];
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
      name: 'name',
      meta: 'meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      name: 'string',
      meta: { 'type': 'array', 'itemType': ModifyFirstRankResponseBodyResultMeta },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQueryProcessorResponseBodyResult extends $tea.Model {
  created?: number;
  active?: boolean;
  domain?: string;
  indexes?: string[];
  processors?: { [key: string]: any }[];
  updated?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      active: 'active',
      domain: 'domain',
      indexes: 'indexes',
      processors: 'processors',
      updated: 'updated',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      active: 'boolean',
      domain: 'string',
      indexes: { 'type': 'array', 'itemType': 'string' },
      processors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      updated: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecondRankResponseBodyResult extends $tea.Model {
  created?: number;
  active?: boolean;
  isDefault?: string;
  isSys?: string;
  description?: string;
  updated?: number;
  name?: string;
  meta?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      active: 'active',
      isDefault: 'isDefault',
      isSys: 'isSys',
      description: 'description',
      updated: 'updated',
      name: 'name',
      meta: 'meta',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      active: 'boolean',
      isDefault: 'string',
      isSys: 'string',
      description: 'string',
      updated: 'number',
      name: 'string',
      meta: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFirstRankResponseBodyResultMeta extends $tea.Model {
  arg?: string;
  attribute?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      arg: 'arg',
      attribute: 'attribute',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      attribute: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFirstRankResponseBodyResult extends $tea.Model {
  active?: boolean;
  description?: string;
  name?: string;
  meta?: RemoveFirstRankResponseBodyResultMeta[];
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
      name: 'name',
      meta: 'meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      name: 'string',
      meta: { 'type': 'array', 'itemType': RemoveFirstRankResponseBodyResultMeta },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveInterventionDictionaryResponseBodyResult extends $tea.Model {
  created?: string;
  type?: string;
  analyzer?: string;
  updated?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      type: 'type',
      analyzer: 'analyzer',
      updated: 'updated',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'string',
      type: 'string',
      analyzer: 'string',
      updated: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceAppGroupCommodityCodeResponseBodyResultQuota extends $tea.Model {
  spec?: string;
  docSize?: number;
  computeResource?: number;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      docSize: 'docSize',
      computeResource: 'computeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      docSize: 'number',
      computeResource: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceAppGroupCommodityCodeResponseBodyResult extends $tea.Model {
  created?: number;
  currentVersion?: string;
  pendingSecondRankAlgoDeploymentId?: number;
  lockMode?: string;
  updated?: number;
  id?: string;
  chargeType?: string;
  hasPendingQuotaReviewTask?: number;
  secondRankAlgoDeploymentId?: number;
  versions?: string[];
  quota?: ReplaceAppGroupCommodityCodeResponseBodyResultQuota;
  name?: string;
  processingOrderId?: string;
  instanceId?: string;
  type?: string;
  chargingWay?: number;
  status?: string;
  projectId?: string;
  commodityCode?: string;
  switchedTime?: number;
  expireOn?: string;
  description?: string;
  firstRankAlgoDeploymentId?: number;
  produced?: number;
  lockedByExpiration?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      currentVersion: 'currentVersion',
      pendingSecondRankAlgoDeploymentId: 'pendingSecondRankAlgoDeploymentId',
      lockMode: 'lockMode',
      updated: 'updated',
      id: 'id',
      chargeType: 'chargeType',
      hasPendingQuotaReviewTask: 'hasPendingQuotaReviewTask',
      secondRankAlgoDeploymentId: 'secondRankAlgoDeploymentId',
      versions: 'versions',
      quota: 'quota',
      name: 'name',
      processingOrderId: 'processingOrderId',
      instanceId: 'instanceId',
      type: 'type',
      chargingWay: 'chargingWay',
      status: 'status',
      projectId: 'projectId',
      commodityCode: 'commodityCode',
      switchedTime: 'switchedTime',
      expireOn: 'expireOn',
      description: 'description',
      firstRankAlgoDeploymentId: 'firstRankAlgoDeploymentId',
      produced: 'produced',
      lockedByExpiration: 'lockedByExpiration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      currentVersion: 'string',
      pendingSecondRankAlgoDeploymentId: 'number',
      lockMode: 'string',
      updated: 'number',
      id: 'string',
      chargeType: 'string',
      hasPendingQuotaReviewTask: 'number',
      secondRankAlgoDeploymentId: 'number',
      versions: { 'type': 'array', 'itemType': 'string' },
      quota: ReplaceAppGroupCommodityCodeResponseBodyResultQuota,
      name: 'string',
      processingOrderId: 'string',
      instanceId: 'string',
      type: 'string',
      chargingWay: 'number',
      status: 'string',
      projectId: 'string',
      commodityCode: 'string',
      switchedTime: 'number',
      expireOn: 'string',
      description: 'string',
      firstRankAlgoDeploymentId: 'number',
      produced: 'number',
      lockedByExpiration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestExperimentResponseBodyResult extends $tea.Model {
  created?: number;
  params?: { [key: string]: any };
  traffic?: number;
  online?: boolean;
  name?: string;
  updated?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      params: 'params',
      traffic: 'traffic',
      online: 'online',
      name: 'name',
      updated: 'updated',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      traffic: 'number',
      online: 'boolean',
      name: 'string',
      updated: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestGroupResponseBodyResult extends $tea.Model {
  created?: number;
  status?: number;
  updated?: number;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      status: 'status',
      updated: 'updated',
      name: 'name',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      status: 'number',
      updated: 'number',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestSceneResponseBodyResult extends $tea.Model {
  created?: number;
  params?: { [key: string]: any };
  traffic?: number;
  online?: boolean;
  name?: string;
  updated?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      params: 'params',
      traffic: 'traffic',
      online: 'online',
      name: 'name',
      updated: 'updated',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      traffic: 'number',
      online: 'boolean',
      name: 'string',
      updated: 'number',
      id: 'string',
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
    this._endpoint = this.getEndpoint("opensearch", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async compileSortScript(appGroupIdentity: string, scriptName: string, appVersionId: string): Promise<CompileSortScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.compileSortScriptWithOptions(appGroupIdentity, scriptName, appVersionId, headers, runtime);
  }

  async compileSortScriptWithOptions(appGroupIdentity: string, scriptName: string, appVersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CompileSortScriptResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CompileSortScriptResponse>(await this.doROARequest("CompileSortScript", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appVersionId}/sort-scripts/{scriptName}/actions/compiling`, "json", req, runtime), new CompileSortScriptResponse({}));
  }

  async createABTestExperiment(appGroupIdentity: string, sceneId: string, groupId: string): Promise<CreateABTestExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABTestExperimentWithOptions(appGroupIdentity, sceneId, groupId, headers, runtime);
  }

  async createABTestExperimentWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateABTestExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateABTestExperimentResponse>(await this.doROARequest("CreateABTestExperiment", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scenes/{sceneId}/groups/{groupId}/experiments`, "json", req, runtime), new CreateABTestExperimentResponse({}));
  }

  async createABTestGroup(appGroupIdentity: string, sceneId: string): Promise<CreateABTestGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABTestGroupWithOptions(appGroupIdentity, sceneId, headers, runtime);
  }

  async createABTestGroupWithOptions(appGroupIdentity: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateABTestGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateABTestGroupResponse>(await this.doROARequest("CreateABTestGroup", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scenes/{sceneId}/groups`, "json", req, runtime), new CreateABTestGroupResponse({}));
  }

  async createABTestScene(appGroupIdentity: string): Promise<CreateABTestSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABTestSceneWithOptions(appGroupIdentity, headers, runtime);
  }

  async createABTestSceneWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateABTestSceneResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateABTestSceneResponse>(await this.doROARequest("CreateABTestScene", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scenes`, "json", req, runtime), new CreateABTestSceneResponse({}));
  }

  async createApp(appGroupIdentity: string, request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppWithOptions(appGroupIdentity, request, headers, runtime);
  }

  async createAppWithOptions(appGroupIdentity: string, request: CreateAppRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateAppResponse>(await this.doROARequest("CreateApp", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps`, "json", req, runtime), new CreateAppResponse({}));
  }

  async createAppGroup(): Promise<CreateAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppGroupWithOptions(headers, runtime);
  }

  async createAppGroupWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAppGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateAppGroupResponse>(await this.doROARequest("CreateAppGroup", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups`, "json", req, runtime), new CreateAppGroupResponse({}));
  }

  async createDataCollection(appGroupIdentity: string): Promise<CreateDataCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDataCollectionWithOptions(appGroupIdentity, headers, runtime);
  }

  async createDataCollectionWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDataCollectionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateDataCollectionResponse>(await this.doROARequest("CreateDataCollection", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/data-collections`, "json", req, runtime), new CreateDataCollectionResponse({}));
  }

  async createFirstRank(appGroupIdentity: string, appId: string, request: CreateFirstRankRequest): Promise<CreateFirstRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFirstRankWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  async createFirstRankWithOptions(appGroupIdentity: string, appId: string, request: CreateFirstRankRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFirstRankResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateFirstRankResponse>(await this.doROARequest("CreateFirstRank", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/first-ranks`, "json", req, runtime), new CreateFirstRankResponse({}));
  }

  async createInterventionDictionary(): Promise<CreateInterventionDictionaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInterventionDictionaryWithOptions(headers, runtime);
  }

  async createInterventionDictionaryWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInterventionDictionaryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateInterventionDictionaryResponse>(await this.doROARequest("CreateInterventionDictionary", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/intervention-dictionaries`, "json", req, runtime), new CreateInterventionDictionaryResponse({}));
  }

  async createModel(appGroupIdentity: string): Promise<CreateModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelWithOptions(appGroupIdentity, headers, runtime);
  }

  async createModelWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateModelResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateModelResponse>(await this.doROARequest("CreateModel", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/algorithm/models`, "json", req, runtime), new CreateModelResponse({}));
  }

  async createQueryProcessor(appGroupIdentity: string, appId: string, request: CreateQueryProcessorRequest): Promise<CreateQueryProcessorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createQueryProcessorWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  async createQueryProcessorWithOptions(appGroupIdentity: string, appId: string, request: CreateQueryProcessorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateQueryProcessorResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateQueryProcessorResponse>(await this.doROARequest("CreateQueryProcessor", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/query-processors`, "json", req, runtime), new CreateQueryProcessorResponse({}));
  }

  async createScheduledTask(appGroupIdentity: string): Promise<CreateScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createScheduledTaskWithOptions(appGroupIdentity, headers, runtime);
  }

  async createScheduledTaskWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateScheduledTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateScheduledTaskResponse>(await this.doROARequest("CreateScheduledTask", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scheduled-tasks`, "json", req, runtime), new CreateScheduledTaskResponse({}));
  }

  async createSecondRank(appGroupIdentity: string, appId: string, request: CreateSecondRankRequest): Promise<CreateSecondRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSecondRankWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  async createSecondRankWithOptions(appGroupIdentity: string, appId: string, request: CreateSecondRankRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSecondRankResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateSecondRankResponse>(await this.doROARequest("CreateSecondRank", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/second-ranks`, "json", req, runtime), new CreateSecondRankResponse({}));
  }

  async createSortScript(appGroupIdentity: string, appVersionId: string): Promise<CreateSortScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSortScriptWithOptions(appGroupIdentity, appVersionId, headers, runtime);
  }

  async createSortScriptWithOptions(appGroupIdentity: string, appVersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSortScriptResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateSortScriptResponse>(await this.doROARequest("CreateSortScript", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appVersionId}/sort-scripts`, "json", req, runtime), new CreateSortScriptResponse({}));
  }

  async createUserAnalyzer(): Promise<CreateUserAnalyzerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUserAnalyzerWithOptions(headers, runtime);
  }

  async createUserAnalyzerWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateUserAnalyzerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateUserAnalyzerResponse>(await this.doROARequest("CreateUserAnalyzer", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/user-analyzers`, "json", req, runtime), new CreateUserAnalyzerResponse({}));
  }

  async deleteABTestExperiment(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string): Promise<DeleteABTestExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABTestExperimentWithOptions(appGroupIdentity, sceneId, groupId, experimentId, headers, runtime);
  }

  async deleteABTestExperimentWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteABTestExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteABTestExperimentResponse>(await this.doROARequest("DeleteABTestExperiment", "2017-12-25", "HTTPS", "DELETE", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scenes/{sceneId}/groups/{groupId}/experiments/{experimentId}`, "json", req, runtime), new DeleteABTestExperimentResponse({}));
  }

  async deleteABTestGroup(appGroupIdentity: string, sceneId: string, groupId: string): Promise<DeleteABTestGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABTestGroupWithOptions(appGroupIdentity, sceneId, groupId, headers, runtime);
  }

  async deleteABTestGroupWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteABTestGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteABTestGroupResponse>(await this.doROARequest("DeleteABTestGroup", "2017-12-25", "HTTPS", "DELETE", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scenes/{sceneId}/groups/{groupId}`, "json", req, runtime), new DeleteABTestGroupResponse({}));
  }

  async deleteABTestScene(appGroupIdentity: string, sceneId: string): Promise<DeleteABTestSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABTestSceneWithOptions(appGroupIdentity, sceneId, headers, runtime);
  }

  async deleteABTestSceneWithOptions(appGroupIdentity: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteABTestSceneResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteABTestSceneResponse>(await this.doROARequest("DeleteABTestScene", "2017-12-25", "HTTPS", "DELETE", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scenes/{sceneId}`, "json", req, runtime), new DeleteABTestSceneResponse({}));
  }

  async deleteModel(appGroupIdentity: string, modelName: string): Promise<DeleteModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelWithOptions(appGroupIdentity, modelName, headers, runtime);
  }

  async deleteModelWithOptions(appGroupIdentity: string, modelName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteModelResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteModelResponse>(await this.doROARequest("DeleteModel", "2017-12-25", "HTTPS", "DELETE", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/algorithm/models/{modelName}`, "json", req, runtime), new DeleteModelResponse({}));
  }

  async deleteSortScript(appGroupIdentity: string, scriptName: string, appVersionId: string): Promise<DeleteSortScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSortScriptWithOptions(appGroupIdentity, scriptName, appVersionId, headers, runtime);
  }

  async deleteSortScriptWithOptions(appGroupIdentity: string, scriptName: string, appVersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSortScriptResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteSortScriptResponse>(await this.doROARequest("DeleteSortScript", "2017-12-25", "HTTPS", "DELETE", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appVersionId}/sort-scripts/{scriptName}`, "json", req, runtime), new DeleteSortScriptResponse({}));
  }

  async deleteSortScriptFile(appGroupIdentity: string, appVersionId: string, scriptName: string, fileName: string): Promise<DeleteSortScriptFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSortScriptFileWithOptions(appGroupIdentity, appVersionId, scriptName, fileName, headers, runtime);
  }

  async deleteSortScriptFileWithOptions(appGroupIdentity: string, appVersionId: string, scriptName: string, fileName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSortScriptFileResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteSortScriptFileResponse>(await this.doROARequest("DeleteSortScriptFile", "2017-12-25", "HTTPS", "DELETE", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appVersionId}/sort-scripts/{scriptName}/files/src/{fileName}`, "json", req, runtime), new DeleteSortScriptFileResponse({}));
  }

  async describeABTestExperiment(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string): Promise<DescribeABTestExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeABTestExperimentWithOptions(appGroupIdentity, sceneId, groupId, experimentId, headers, runtime);
  }

  async describeABTestExperimentWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeABTestExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeABTestExperimentResponse>(await this.doROARequest("DescribeABTestExperiment", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scenes/{sceneId}/groups/{groupId}/experiments/{experimentId}`, "json", req, runtime), new DescribeABTestExperimentResponse({}));
  }

  async describeABTestGroup(appGroupIdentity: string, sceneId: string, groupId: string): Promise<DescribeABTestGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeABTestGroupWithOptions(appGroupIdentity, sceneId, groupId, headers, runtime);
  }

  async describeABTestGroupWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeABTestGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeABTestGroupResponse>(await this.doROARequest("DescribeABTestGroup", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scenes/{sceneId}/groups/{groupId}`, "json", req, runtime), new DescribeABTestGroupResponse({}));
  }

  async describeABTestScene(appGroupIdentity: string, sceneId: string): Promise<DescribeABTestSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeABTestSceneWithOptions(appGroupIdentity, sceneId, headers, runtime);
  }

  async describeABTestSceneWithOptions(appGroupIdentity: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeABTestSceneResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeABTestSceneResponse>(await this.doROARequest("DescribeABTestScene", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scenes/{sceneId}`, "json", req, runtime), new DescribeABTestSceneResponse({}));
  }

  async describeApp(appGroupIdentity: string, appId: string): Promise<DescribeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  async describeAppWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeAppResponse>(await this.doROARequest("DescribeApp", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}`, "json", req, runtime), new DescribeAppResponse({}));
  }

  async describeAppGroup(appGroupIdentity: string): Promise<DescribeAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppGroupWithOptions(appGroupIdentity, headers, runtime);
  }

  async describeAppGroupWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeAppGroupResponse>(await this.doROARequest("DescribeAppGroup", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}`, "json", req, runtime), new DescribeAppGroupResponse({}));
  }

  async describeAppGroupDataReport(appGroupIdentity: string, request: DescribeAppGroupDataReportRequest): Promise<DescribeAppGroupDataReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppGroupDataReportWithOptions(appGroupIdentity, request, headers, runtime);
  }

  async describeAppGroupDataReportWithOptions(appGroupIdentity: string, request: DescribeAppGroupDataReportRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppGroupDataReportResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeAppGroupDataReportResponse>(await this.doROARequest("DescribeAppGroupDataReport", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/data-report`, "json", req, runtime), new DescribeAppGroupDataReportResponse({}));
  }

  async describeApps(appGroupIdentity: string): Promise<DescribeAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppsWithOptions(appGroupIdentity, headers, runtime);
  }

  async describeAppsWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeAppsResponse>(await this.doROARequest("DescribeApps", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps`, "json", req, runtime), new DescribeAppsResponse({}));
  }

  async describeAppStatistics(appGroupIdentity: string, appId: string): Promise<DescribeAppStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppStatisticsWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  async describeAppStatisticsWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppStatisticsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeAppStatisticsResponse>(await this.doROARequest("DescribeAppStatistics", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/statistics`, "json", req, runtime), new DescribeAppStatisticsResponse({}));
  }

  async describeDataCollction(appGroupIdentity: string, dataCollectionIdentity: string): Promise<DescribeDataCollctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDataCollctionWithOptions(appGroupIdentity, dataCollectionIdentity, headers, runtime);
  }

  async describeDataCollctionWithOptions(appGroupIdentity: string, dataCollectionIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeDataCollctionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeDataCollctionResponse>(await this.doROARequest("DescribeDataCollction", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/data-collections/{dataCollectionIdentity}`, "json", req, runtime), new DescribeDataCollctionResponse({}));
  }

  async describeFirstRank(appGroupIdentity: string, appId: string, name: string): Promise<DescribeFirstRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeFirstRankWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  async describeFirstRankWithOptions(appGroupIdentity: string, appId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeFirstRankResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeFirstRankResponse>(await this.doROARequest("DescribeFirstRank", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/first-ranks/{name}`, "json", req, runtime), new DescribeFirstRankResponse({}));
  }

  async describeInterventionDictionary(name: string): Promise<DescribeInterventionDictionaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInterventionDictionaryWithOptions(name, headers, runtime);
  }

  async describeInterventionDictionaryWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeInterventionDictionaryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeInterventionDictionaryResponse>(await this.doROARequest("DescribeInterventionDictionary", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/intervention-dictionaries/${name}`, "json", req, runtime), new DescribeInterventionDictionaryResponse({}));
  }

  async describeModel(appGroupIdentity: string, modelName: string): Promise<DescribeModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeModelWithOptions(appGroupIdentity, modelName, headers, runtime);
  }

  async describeModelWithOptions(appGroupIdentity: string, modelName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeModelResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeModelResponse>(await this.doROARequest("DescribeModel", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/algorithm/models/{modelName}`, "json", req, runtime), new DescribeModelResponse({}));
  }

  async describeQueryProcessor(appGroupIdentity: string, appId: string, name: string): Promise<DescribeQueryProcessorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeQueryProcessorWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  async describeQueryProcessorWithOptions(appGroupIdentity: string, appId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeQueryProcessorResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeQueryProcessorResponse>(await this.doROARequest("DescribeQueryProcessor", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/query-processors/{name}`, "json", req, runtime), new DescribeQueryProcessorResponse({}));
  }

  async describeRegion(): Promise<DescribeRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionWithOptions(headers, runtime);
  }

  async describeRegionWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRegionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeRegionResponse>(await this.doROARequest("DescribeRegion", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/region`, "json", req, runtime), new DescribeRegionResponse({}));
  }

  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(headers, runtime);
  }

  async describeRegionsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doROARequest("DescribeRegions", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/regions`, "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeScheduledTask(appGroupIdentity: string, taskId: string): Promise<DescribeScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeScheduledTaskWithOptions(appGroupIdentity, taskId, headers, runtime);
  }

  async describeScheduledTaskWithOptions(appGroupIdentity: string, taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeScheduledTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeScheduledTaskResponse>(await this.doROARequest("DescribeScheduledTask", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scheduled-tasks/{taskId}`, "json", req, runtime), new DescribeScheduledTaskResponse({}));
  }

  async describeSecondRank(appGroupIdentity: string, appId: string, name: string): Promise<DescribeSecondRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSecondRankWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  async describeSecondRankWithOptions(appGroupIdentity: string, appId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeSecondRankResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeSecondRankResponse>(await this.doROARequest("DescribeSecondRank", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/second-ranks/{name}`, "json", req, runtime), new DescribeSecondRankResponse({}));
  }

  async describeSlowQueryStatus(appGroupIdentity: string): Promise<DescribeSlowQueryStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSlowQueryStatusWithOptions(appGroupIdentity, headers, runtime);
  }

  async describeSlowQueryStatusWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeSlowQueryStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeSlowQueryStatusResponse>(await this.doROARequest("DescribeSlowQueryStatus", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/optimizers/slow-query`, "json", req, runtime), new DescribeSlowQueryStatusResponse({}));
  }

  async describeUserAnalyzer(name: string, request: DescribeUserAnalyzerRequest): Promise<DescribeUserAnalyzerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserAnalyzerWithOptions(name, request, headers, runtime);
  }

  async describeUserAnalyzerWithOptions(name: string, request: DescribeUserAnalyzerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeUserAnalyzerResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.with)) {
      query["with"] = request.with;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeUserAnalyzerResponse>(await this.doROARequest("DescribeUserAnalyzer", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/user-analyzers/${name}`, "json", req, runtime), new DescribeUserAnalyzerResponse({}));
  }

  async disableSlowQuery(appGroupIdentity: string): Promise<DisableSlowQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableSlowQueryWithOptions(appGroupIdentity, headers, runtime);
  }

  async disableSlowQueryWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableSlowQueryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DisableSlowQueryResponse>(await this.doROARequest("DisableSlowQuery", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/optimizers/slow-query/actions/disable`, "json", req, runtime), new DisableSlowQueryResponse({}));
  }

  async enableSlowQuery(appGroupIdentity: string): Promise<EnableSlowQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableSlowQueryWithOptions(appGroupIdentity, headers, runtime);
  }

  async enableSlowQueryWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableSlowQueryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<EnableSlowQueryResponse>(await this.doROARequest("EnableSlowQuery", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/optimizers/slow-query/actions/enable`, "json", req, runtime), new EnableSlowQueryResponse({}));
  }

  async getModelProgress(appGroupIdentity: string, modelName: string): Promise<GetModelProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelProgressWithOptions(appGroupIdentity, modelName, headers, runtime);
  }

  async getModelProgressWithOptions(appGroupIdentity: string, modelName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetModelProgressResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetModelProgressResponse>(await this.doROARequest("GetModelProgress", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/algorithm/models/{modelName}/progress`, "json", req, runtime), new GetModelProgressResponse({}));
  }

  async getModelReport(appGroupIdentity: string, modelName: string): Promise<GetModelReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelReportWithOptions(appGroupIdentity, modelName, headers, runtime);
  }

  async getModelReportWithOptions(appGroupIdentity: string, modelName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetModelReportResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetModelReportResponse>(await this.doROARequest("GetModelReport", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/algorithm/models/{modelName}/report`, "json", req, runtime), new GetModelReportResponse({}));
  }

  async getScriptFileNames(appGroupIdentity: string, appVersionId: string, scriptName: string): Promise<GetScriptFileNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScriptFileNamesWithOptions(appGroupIdentity, appVersionId, scriptName, headers, runtime);
  }

  async getScriptFileNamesWithOptions(appGroupIdentity: string, appVersionId: string, scriptName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetScriptFileNamesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetScriptFileNamesResponse>(await this.doROARequest("GetScriptFileNames", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appVersionId}/sort-scripts/{scriptName}/file-names`, "json", req, runtime), new GetScriptFileNamesResponse({}));
  }

  async getSortScript(appGroupIdentity: string, scriptName: string, appVersionId: string): Promise<GetSortScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSortScriptWithOptions(appGroupIdentity, scriptName, appVersionId, headers, runtime);
  }

  async getSortScriptWithOptions(appGroupIdentity: string, scriptName: string, appVersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSortScriptResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetSortScriptResponse>(await this.doROARequest("GetSortScript", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appVersionId}/sort-scripts/{scriptName}`, "json", req, runtime), new GetSortScriptResponse({}));
  }

  async getSortScriptFile(appGroupIdentity: string, scriptName: string, appVersionId: string, fileName: string): Promise<GetSortScriptFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSortScriptFileWithOptions(appGroupIdentity, scriptName, appVersionId, fileName, headers, runtime);
  }

  async getSortScriptFileWithOptions(appGroupIdentity: string, scriptName: string, appVersionId: string, fileName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSortScriptFileResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetSortScriptFileResponse>(await this.doROARequest("GetSortScriptFile", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appVersionId}/sort-scripts/{scriptName}/files/src/{fileName}`, "json", req, runtime), new GetSortScriptFileResponse({}));
  }

  async getValidationError(appGroupIdentity: string, request: GetValidationErrorRequest): Promise<GetValidationErrorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getValidationErrorWithOptions(appGroupIdentity, request, headers, runtime);
  }

  async getValidationErrorWithOptions(appGroupIdentity: string, request: GetValidationErrorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetValidationErrorResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.errorCode)) {
      query["errorCode"] = request.errorCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetValidationErrorResponse>(await this.doROARequest("GetValidationError", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/algorithm/data/validation-error`, "json", req, runtime), new GetValidationErrorResponse({}));
  }

  async getValidationReport(appGroupIdentity: string, request: GetValidationReportRequest): Promise<GetValidationReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getValidationReportWithOptions(appGroupIdentity, request, headers, runtime);
  }

  async getValidationReportWithOptions(appGroupIdentity: string, request: GetValidationReportRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetValidationReportResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetValidationReportResponse>(await this.doROARequest("GetValidationReport", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/algorithm/data/validation-report`, "json", req, runtime), new GetValidationReportResponse({}));
  }

  async listABTestExperiments(appGroupIdentity: string, sceneId: string, groupId: string): Promise<ListABTestExperimentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABTestExperimentsWithOptions(appGroupIdentity, sceneId, groupId, headers, runtime);
  }

  async listABTestExperimentsWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListABTestExperimentsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListABTestExperimentsResponse>(await this.doROARequest("ListABTestExperiments", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scenes/{sceneId}/groups/{groupId}/experiments`, "json", req, runtime), new ListABTestExperimentsResponse({}));
  }

  async listABTestFixedFlowDividers(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string): Promise<ListABTestFixedFlowDividersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABTestFixedFlowDividersWithOptions(appGroupIdentity, sceneId, groupId, experimentId, headers, runtime);
  }

  async listABTestFixedFlowDividersWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListABTestFixedFlowDividersResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListABTestFixedFlowDividersResponse>(await this.doROARequest("ListABTestFixedFlowDividers", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scenes/{sceneId}/groups/{groupId}/experiments/{experimentId}/fixed-flow-dividers`, "json", req, runtime), new ListABTestFixedFlowDividersResponse({}));
  }

  async listABTestGroups(appGroupIdentity: string, sceneId: string): Promise<ListABTestGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABTestGroupsWithOptions(appGroupIdentity, sceneId, headers, runtime);
  }

  async listABTestGroupsWithOptions(appGroupIdentity: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListABTestGroupsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListABTestGroupsResponse>(await this.doROARequest("ListABTestGroups", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scenes/{sceneId}/groups`, "json", req, runtime), new ListABTestGroupsResponse({}));
  }

  async listABTestMetrics(appGroupIdentity: string, sceneId: string, groupId: string): Promise<ListABTestMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABTestMetricsWithOptions(appGroupIdentity, sceneId, groupId, headers, runtime);
  }

  async listABTestMetricsWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListABTestMetricsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListABTestMetricsResponse>(await this.doROARequest("ListABTestMetrics", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scenes/{sceneId}/groups/{groupId}/metrics`, "json", req, runtime), new ListABTestMetricsResponse({}));
  }

  async listABTestScenes(appGroupIdentity: string): Promise<ListABTestScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABTestScenesWithOptions(appGroupIdentity, headers, runtime);
  }

  async listABTestScenesWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListABTestScenesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListABTestScenesResponse>(await this.doROARequest("ListABTestScenes", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scenes`, "json", req, runtime), new ListABTestScenesResponse({}));
  }

  async listAppGroupErrors(appGroupIdentity: string, request: ListAppGroupErrorsRequest): Promise<ListAppGroupErrorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppGroupErrorsWithOptions(appGroupIdentity, request, headers, runtime);
  }

  async listAppGroupErrorsWithOptions(appGroupIdentity: string, request: ListAppGroupErrorsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAppGroupErrorsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["appId"] = request.appId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.stopTime)) {
      query["stopTime"] = request.stopTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListAppGroupErrorsResponse>(await this.doROARequest("ListAppGroupErrors", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/errors`, "json", req, runtime), new ListAppGroupErrorsResponse({}));
  }

  async listAppGroupMetrics(appGroupIdentity: string, request: ListAppGroupMetricsRequest): Promise<ListAppGroupMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppGroupMetricsWithOptions(appGroupIdentity, request, headers, runtime);
  }

  async listAppGroupMetricsWithOptions(appGroupIdentity: string, request: ListAppGroupMetricsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAppGroupMetricsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.metricType)) {
      query["metricType"] = request.metricType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.indexes)) {
      query["indexes"] = request.indexes;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListAppGroupMetricsResponse>(await this.doROARequest("ListAppGroupMetrics", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/metrics`, "json", req, runtime), new ListAppGroupMetricsResponse({}));
  }

  async listAppGroups(request: ListAppGroupsRequest): Promise<ListAppGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppGroupsWithOptions(request, headers, runtime);
  }

  async listAppGroupsWithOptions(request: ListAppGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAppGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["sortBy"] = request.sortBy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListAppGroupsResponse>(await this.doROARequest("ListAppGroups", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups`, "json", req, runtime), new ListAppGroupsResponse({}));
  }

  async listApps(request: ListAppsRequest): Promise<ListAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppsWithOptions(request, headers, runtime);
  }

  async listAppsWithOptions(request: ListAppsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAppsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.group)) {
      query["group"] = request.group;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListAppsResponse>(await this.doROARequest("ListApps", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/apps`, "none", req, runtime), new ListAppsResponse({}));
  }

  async listDataCollections(appGroupIdentity: string, request: ListDataCollectionsRequest): Promise<ListDataCollectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataCollectionsWithOptions(appGroupIdentity, request, headers, runtime);
  }

  async listDataCollectionsWithOptions(appGroupIdentity: string, request: ListDataCollectionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataCollectionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListDataCollectionsResponse>(await this.doROARequest("ListDataCollections", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/data-collections`, "json", req, runtime), new ListDataCollectionsResponse({}));
  }

  async listDeployedAlgorithmModels(appGroupIdentity: string, request: ListDeployedAlgorithmModelsRequest): Promise<ListDeployedAlgorithmModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDeployedAlgorithmModelsWithOptions(appGroupIdentity, request, headers, runtime);
  }

  async listDeployedAlgorithmModelsWithOptions(appGroupIdentity: string, request: ListDeployedAlgorithmModelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDeployedAlgorithmModelsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inServiceOnly)) {
      query["inServiceOnly"] = request.inServiceOnly;
    }

    if (!Util.isUnset(request.algorithmType)) {
      query["algorithmType"] = request.algorithmType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListDeployedAlgorithmModelsResponse>(await this.doROARequest("ListDeployedAlgorithmModels", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/deployed-algorithm-models`, "json", req, runtime), new ListDeployedAlgorithmModelsResponse({}));
  }

  async listFirstRanks(appGroupIdentity: string, appId: string): Promise<ListFirstRanksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFirstRanksWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  async listFirstRanksWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFirstRanksResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListFirstRanksResponse>(await this.doROARequest("ListFirstRanks", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/first-ranks`, "json", req, runtime), new ListFirstRanksResponse({}));
  }

  async listInterventionDictionaries(request: ListInterventionDictionariesRequest): Promise<ListInterventionDictionariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInterventionDictionariesWithOptions(request, headers, runtime);
  }

  async listInterventionDictionariesWithOptions(request: ListInterventionDictionariesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInterventionDictionariesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.types)) {
      query["types"] = request.types;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListInterventionDictionariesResponse>(await this.doROARequest("ListInterventionDictionaries", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/intervention-dictionaries`, "json", req, runtime), new ListInterventionDictionariesResponse({}));
  }

  async listInterventionDictionaryEntries(name: string, request: ListInterventionDictionaryEntriesRequest): Promise<ListInterventionDictionaryEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInterventionDictionaryEntriesWithOptions(name, request, headers, runtime);
  }

  async listInterventionDictionaryEntriesWithOptions(name: string, request: ListInterventionDictionaryEntriesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInterventionDictionaryEntriesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.word)) {
      query["word"] = request.word;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListInterventionDictionaryEntriesResponse>(await this.doROARequest("ListInterventionDictionaryEntries", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/intervention-dictionaries/${name}/entries`, "json", req, runtime), new ListInterventionDictionaryEntriesResponse({}));
  }

  async listInterventionDictionaryNerResults(name: string, request: ListInterventionDictionaryNerResultsRequest): Promise<ListInterventionDictionaryNerResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInterventionDictionaryNerResultsWithOptions(name, request, headers, runtime);
  }

  async listInterventionDictionaryNerResultsWithOptions(name: string, request: ListInterventionDictionaryNerResultsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInterventionDictionaryNerResultsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListInterventionDictionaryNerResultsResponse>(await this.doROARequest("ListInterventionDictionaryNerResults", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/intervention-dictionaries/${name}/ner-results`, "json", req, runtime), new ListInterventionDictionaryNerResultsResponse({}));
  }

  async listInterventionDictionaryRelatedEntities(name: string): Promise<ListInterventionDictionaryRelatedEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInterventionDictionaryRelatedEntitiesWithOptions(name, headers, runtime);
  }

  async listInterventionDictionaryRelatedEntitiesWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInterventionDictionaryRelatedEntitiesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListInterventionDictionaryRelatedEntitiesResponse>(await this.doROARequest("ListInterventionDictionaryRelatedEntities", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/intervention-dictionaries/${name}/related`, "json", req, runtime), new ListInterventionDictionaryRelatedEntitiesResponse({}));
  }

  async listModels(appGroupIdentity: string, request: ListModelsRequest): Promise<ListModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelsWithOptions(appGroupIdentity, request, headers, runtime);
  }

  async listModelsWithOptions(appGroupIdentity: string, request: ListModelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListModelsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListModelsResponse>(await this.doROARequest("ListModels", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/algorithm/models`, "json", req, runtime), new ListModelsResponse({}));
  }

  async listQueryProcessorNers(request: ListQueryProcessorNersRequest): Promise<ListQueryProcessorNersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQueryProcessorNersWithOptions(request, headers, runtime);
  }

  async listQueryProcessorNersWithOptions(request: ListQueryProcessorNersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListQueryProcessorNersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domain)) {
      query["domain"] = request.domain;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListQueryProcessorNersResponse>(await this.doROARequest("ListQueryProcessorNers", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/query-processor/ner/default-priorities`, "json", req, runtime), new ListQueryProcessorNersResponse({}));
  }

  async listQueryProcessors(appGroupIdentity: string, appId: string, request: ListQueryProcessorsRequest): Promise<ListQueryProcessorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQueryProcessorsWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  async listQueryProcessorsWithOptions(appGroupIdentity: string, appId: string, request: ListQueryProcessorsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListQueryProcessorsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isActive)) {
      query["isActive"] = request.isActive;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListQueryProcessorsResponse>(await this.doROARequest("ListQueryProcessors", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/query-processors`, "json", req, runtime), new ListQueryProcessorsResponse({}));
  }

  async listScheduledTasks(appGroupIdentity: string, request: ListScheduledTasksRequest): Promise<ListScheduledTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScheduledTasksWithOptions(appGroupIdentity, request, headers, runtime);
  }

  async listScheduledTasksWithOptions(appGroupIdentity: string, request: ListScheduledTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListScheduledTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListScheduledTasksResponse>(await this.doROARequest("ListScheduledTasks", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scheduled-tasks`, "json", req, runtime), new ListScheduledTasksResponse({}));
  }

  async listSecondRanks(appGroupIdentity: string, appId: string): Promise<ListSecondRanksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSecondRanksWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  async listSecondRanksWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSecondRanksResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListSecondRanksResponse>(await this.doROARequest("ListSecondRanks", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/second-ranks`, "json", req, runtime), new ListSecondRanksResponse({}));
  }

  async listSlowQueryCategories(appGroupIdentity: string): Promise<ListSlowQueryCategoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSlowQueryCategoriesWithOptions(appGroupIdentity, headers, runtime);
  }

  async listSlowQueryCategoriesWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSlowQueryCategoriesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListSlowQueryCategoriesResponse>(await this.doROARequest("ListSlowQueryCategories", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/optimizers/slow-query/categories`, "json", req, runtime), new ListSlowQueryCategoriesResponse({}));
  }

  async listSlowQueryQueries(appGroupIdentity: string, categoryIndex: string): Promise<ListSlowQueryQueriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSlowQueryQueriesWithOptions(appGroupIdentity, categoryIndex, headers, runtime);
  }

  async listSlowQueryQueriesWithOptions(appGroupIdentity: string, categoryIndex: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSlowQueryQueriesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListSlowQueryQueriesResponse>(await this.doROARequest("ListSlowQueryQueries", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/optimizers/slow-query/categories/{categoryIndex}/queries`, "json", req, runtime), new ListSlowQueryQueriesResponse({}));
  }

  async listSortExpressions(appGroupIdentity: string, appId: string): Promise<ListSortExpressionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSortExpressionsWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  async listSortExpressionsWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSortExpressionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListSortExpressionsResponse>(await this.doROARequest("ListSortExpressions", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/sort-expressions`, "json", req, runtime), new ListSortExpressionsResponse({}));
  }

  async listSortScripts(appGroupIdentity: string, appVersionId: string): Promise<ListSortScriptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSortScriptsWithOptions(appGroupIdentity, appVersionId, headers, runtime);
  }

  async listSortScriptsWithOptions(appGroupIdentity: string, appVersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSortScriptsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListSortScriptsResponse>(await this.doROARequest("ListSortScripts", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appVersionId}/sort-scripts`, "json", req, runtime), new ListSortScriptsResponse({}));
  }

  async listStatisticLogs(appGroupIdentity: string, moduleName: string, request: ListStatisticLogsRequest): Promise<ListStatisticLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStatisticLogsWithOptions(appGroupIdentity, moduleName, request, headers, runtime);
  }

  async listStatisticLogsWithOptions(appGroupIdentity: string, moduleName: string, request: ListStatisticLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListStatisticLogsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.stopTime)) {
      query["stopTime"] = request.stopTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["sortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.distinct)) {
      query["distinct"] = request.distinct;
    }

    if (!Util.isUnset(request.columns)) {
      query["columns"] = request.columns;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListStatisticLogsResponse>(await this.doROARequest("ListStatisticLogs", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/statistic-logs/{moduleName}`, "json", req, runtime), new ListStatisticLogsResponse({}));
  }

  async listStatisticReport(appGroupIdentity: string, moduleName: string, request: ListStatisticReportRequest): Promise<ListStatisticReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStatisticReportWithOptions(appGroupIdentity, moduleName, request, headers, runtime);
  }

  async listStatisticReportWithOptions(appGroupIdentity: string, moduleName: string, request: ListStatisticReportRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListStatisticReportResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.columns)) {
      query["columns"] = request.columns;
    }

    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListStatisticReportResponse>(await this.doROARequest("ListStatisticReport", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/statistic-report/{moduleName}`, "json", req, runtime), new ListStatisticReportResponse({}));
  }

  async listUserAnalyzerEntries(name: string, request: ListUserAnalyzerEntriesRequest): Promise<ListUserAnalyzerEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserAnalyzerEntriesWithOptions(name, request, headers, runtime);
  }

  async listUserAnalyzerEntriesWithOptions(name: string, request: ListUserAnalyzerEntriesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUserAnalyzerEntriesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.word)) {
      query["word"] = request.word;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListUserAnalyzerEntriesResponse>(await this.doROARequest("ListUserAnalyzerEntries", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/user-analyzers/${name}/entries`, "json", req, runtime), new ListUserAnalyzerEntriesResponse({}));
  }

  async listUserAnalyzers(request: ListUserAnalyzersRequest): Promise<ListUserAnalyzersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserAnalyzersWithOptions(request, headers, runtime);
  }

  async listUserAnalyzersWithOptions(request: ListUserAnalyzersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUserAnalyzersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListUserAnalyzersResponse>(await this.doROARequest("ListUserAnalyzers", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/user-analyzers`, "json", req, runtime), new ListUserAnalyzersResponse({}));
  }

  async modifyAppGroup(appGroupIdentity: string): Promise<ModifyAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyAppGroupWithOptions(appGroupIdentity, headers, runtime);
  }

  async modifyAppGroupWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyAppGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ModifyAppGroupResponse>(await this.doROARequest("ModifyAppGroup", "2017-12-25", "HTTPS", "PUT", "AK", `/v4/openapi/app-groups/${appGroupIdentity}`, "json", req, runtime), new ModifyAppGroupResponse({}));
  }

  async modifyAppGroupQuota(appGroupIdentity: string): Promise<ModifyAppGroupQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyAppGroupQuotaWithOptions(appGroupIdentity, headers, runtime);
  }

  async modifyAppGroupQuotaWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyAppGroupQuotaResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ModifyAppGroupQuotaResponse>(await this.doROARequest("ModifyAppGroupQuota", "2017-12-25", "HTTPS", "PUT", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/quota`, "json", req, runtime), new ModifyAppGroupQuotaResponse({}));
  }

  async modifyFirstRank(appGroupIdentity: string, appId: string, name: string, request: ModifyFirstRankRequest): Promise<ModifyFirstRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyFirstRankWithOptions(appGroupIdentity, appId, name, request, headers, runtime);
  }

  async modifyFirstRankWithOptions(appGroupIdentity: string, appId: string, name: string, request: ModifyFirstRankRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyFirstRankResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ModifyFirstRankResponse>(await this.doROARequest("ModifyFirstRank", "2017-12-25", "HTTPS", "PUT", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/first-ranks/{name}`, "json", req, runtime), new ModifyFirstRankResponse({}));
  }

  async modifyModel(appGroupIdentity: string, modelName: string): Promise<ModifyModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyModelWithOptions(appGroupIdentity, modelName, headers, runtime);
  }

  async modifyModelWithOptions(appGroupIdentity: string, modelName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyModelResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ModifyModelResponse>(await this.doROARequest("ModifyModel", "2017-12-25", "HTTPS", "PUT", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/algorithm/models/{modelName}`, "json", req, runtime), new ModifyModelResponse({}));
  }

  async modifyQueryProcessor(appGroupIdentity: string, appId: string, name: string, request: ModifyQueryProcessorRequest): Promise<ModifyQueryProcessorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyQueryProcessorWithOptions(appGroupIdentity, appId, name, request, headers, runtime);
  }

  async modifyQueryProcessorWithOptions(appGroupIdentity: string, appId: string, name: string, request: ModifyQueryProcessorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyQueryProcessorResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ModifyQueryProcessorResponse>(await this.doROARequest("ModifyQueryProcessor", "2017-12-25", "HTTPS", "PUT", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/query-processors/{name}`, "json", req, runtime), new ModifyQueryProcessorResponse({}));
  }

  async modifyScheduledTask(appGroupIdentity: string, taskId: string): Promise<ModifyScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyScheduledTaskWithOptions(appGroupIdentity, taskId, headers, runtime);
  }

  async modifyScheduledTaskWithOptions(appGroupIdentity: string, taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyScheduledTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ModifyScheduledTaskResponse>(await this.doROARequest("ModifyScheduledTask", "2017-12-25", "HTTPS", "PUT", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scheduled-tasks/{taskId}`, "json", req, runtime), new ModifyScheduledTaskResponse({}));
  }

  async modifySecondRank(appGroupIdentity: string, appId: string, name: string, request: ModifySecondRankRequest): Promise<ModifySecondRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifySecondRankWithOptions(appGroupIdentity, appId, name, request, headers, runtime);
  }

  async modifySecondRankWithOptions(appGroupIdentity: string, appId: string, name: string, request: ModifySecondRankRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifySecondRankResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ModifySecondRankResponse>(await this.doROARequest("ModifySecondRank", "2017-12-25", "HTTPS", "PUT", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/second-ranks/{name}`, "json", req, runtime), new ModifySecondRankResponse({}));
  }

  async previewModel(appGroupIdentity: string, modelName: string, request: PreviewModelRequest): Promise<PreviewModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.previewModelWithOptions(appGroupIdentity, modelName, request, headers, runtime);
  }

  async previewModelWithOptions(appGroupIdentity: string, modelName: string, request: PreviewModelRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PreviewModelResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<PreviewModelResponse>(await this.doROARequest("PreviewModel", "2017-12-25", "HTTPS", "GET", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/algorithm/models/{modelName}/actions/preview`, "json", req, runtime), new PreviewModelResponse({}));
  }

  async pushInterventionDictionaryEntries(name: string): Promise<PushInterventionDictionaryEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushInterventionDictionaryEntriesWithOptions(name, headers, runtime);
  }

  async pushInterventionDictionaryEntriesWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PushInterventionDictionaryEntriesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<PushInterventionDictionaryEntriesResponse>(await this.doROARequest("PushInterventionDictionaryEntries", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/intervention-dictionaries/${name}/entries/actions/bulk`, "json", req, runtime), new PushInterventionDictionaryEntriesResponse({}));
  }

  async pushUserAnalyzerEntries(name: string): Promise<PushUserAnalyzerEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushUserAnalyzerEntriesWithOptions(name, headers, runtime);
  }

  async pushUserAnalyzerEntriesWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PushUserAnalyzerEntriesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<PushUserAnalyzerEntriesResponse>(await this.doROARequest("PushUserAnalyzerEntries", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/user-analyzers/${name}/entries/actions/bulk`, "json", req, runtime), new PushUserAnalyzerEntriesResponse({}));
  }

  async rankPreviewQuery(appGroupIdentity: string, modelName: string): Promise<RankPreviewQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rankPreviewQueryWithOptions(appGroupIdentity, modelName, headers, runtime);
  }

  async rankPreviewQueryWithOptions(appGroupIdentity: string, modelName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RankPreviewQueryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<RankPreviewQueryResponse>(await this.doROARequest("RankPreviewQuery", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/algorithm/models/{modelName}/actions/query-rank`, "json", req, runtime), new RankPreviewQueryResponse({}));
  }

  async releaseSortScript(appGroupIdentity: string, scriptName: string, appVersionId: string): Promise<ReleaseSortScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.releaseSortScriptWithOptions(appGroupIdentity, scriptName, appVersionId, headers, runtime);
  }

  async releaseSortScriptWithOptions(appGroupIdentity: string, scriptName: string, appVersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReleaseSortScriptResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ReleaseSortScriptResponse>(await this.doROARequest("ReleaseSortScript", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appVersionId}/sort-scripts/{scriptName}/actions/release`, "json", req, runtime), new ReleaseSortScriptResponse({}));
  }

  async removeApp(appGroupIdentity: string, appId: string): Promise<RemoveAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeAppWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  async removeAppWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveAppResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<RemoveAppResponse>(await this.doROARequest("RemoveApp", "2017-12-25", "HTTPS", "DELETE", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}`, "json", req, runtime), new RemoveAppResponse({}));
  }

  async removeAppGroup(appGroupIdentity: string): Promise<RemoveAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeAppGroupWithOptions(appGroupIdentity, headers, runtime);
  }

  async removeAppGroupWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveAppGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<RemoveAppGroupResponse>(await this.doROARequest("RemoveAppGroup", "2017-12-25", "HTTPS", "DELETE", "AK", `/v4/openapi/app-groups/${appGroupIdentity}`, "json", req, runtime), new RemoveAppGroupResponse({}));
  }

  async removeDataCollection(appGroupIdentity: string, dataCollectionIdentity: string): Promise<RemoveDataCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeDataCollectionWithOptions(appGroupIdentity, dataCollectionIdentity, headers, runtime);
  }

  async removeDataCollectionWithOptions(appGroupIdentity: string, dataCollectionIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveDataCollectionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<RemoveDataCollectionResponse>(await this.doROARequest("RemoveDataCollection", "2017-12-25", "HTTPS", "DELETE", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/data-collections/{dataCollectionIdentity}`, "json", req, runtime), new RemoveDataCollectionResponse({}));
  }

  async removeFirstRank(appGroupIdentity: string, appId: string, name: string): Promise<RemoveFirstRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeFirstRankWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  async removeFirstRankWithOptions(appGroupIdentity: string, appId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveFirstRankResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<RemoveFirstRankResponse>(await this.doROARequest("RemoveFirstRank", "2017-12-25", "HTTPS", "DELETE", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/first-ranks/{name}`, "json", req, runtime), new RemoveFirstRankResponse({}));
  }

  async removeInterventionDictionary(name: string): Promise<RemoveInterventionDictionaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeInterventionDictionaryWithOptions(name, headers, runtime);
  }

  async removeInterventionDictionaryWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveInterventionDictionaryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<RemoveInterventionDictionaryResponse>(await this.doROARequest("RemoveInterventionDictionary", "2017-12-25", "HTTPS", "DELETE", "AK", `/v4/openapi/intervention-dictionaries/${name}`, "json", req, runtime), new RemoveInterventionDictionaryResponse({}));
  }

  async removeQueryProcessor(appGroupIdentity: string, appId: string, name: string): Promise<RemoveQueryProcessorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeQueryProcessorWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  async removeQueryProcessorWithOptions(appGroupIdentity: string, appId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveQueryProcessorResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<RemoveQueryProcessorResponse>(await this.doROARequest("RemoveQueryProcessor", "2017-12-25", "HTTPS", "DELETE", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/query-processors/{name}`, "json", req, runtime), new RemoveQueryProcessorResponse({}));
  }

  async removeScheduledTask(appGroupIdentity: string, taskId: string): Promise<RemoveScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeScheduledTaskWithOptions(appGroupIdentity, taskId, headers, runtime);
  }

  async removeScheduledTaskWithOptions(appGroupIdentity: string, taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveScheduledTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<RemoveScheduledTaskResponse>(await this.doROARequest("RemoveScheduledTask", "2017-12-25", "HTTPS", "DELETE", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scheduled-tasks/{taskId}`, "json", req, runtime), new RemoveScheduledTaskResponse({}));
  }

  async removeSecondRank(appGroupIdentity: string, appId: string, name: string): Promise<RemoveSecondRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeSecondRankWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  async removeSecondRankWithOptions(appGroupIdentity: string, appId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveSecondRankResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<RemoveSecondRankResponse>(await this.doROARequest("RemoveSecondRank", "2017-12-25", "HTTPS", "DELETE", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/second-ranks/{name}`, "json", req, runtime), new RemoveSecondRankResponse({}));
  }

  async removeUserAnalyzer(name: string): Promise<RemoveUserAnalyzerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeUserAnalyzerWithOptions(name, headers, runtime);
  }

  async removeUserAnalyzerWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveUserAnalyzerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<RemoveUserAnalyzerResponse>(await this.doROARequest("RemoveUserAnalyzer", "2017-12-25", "HTTPS", "DELETE", "AK", `/v4/openapi/user-analyzers/${name}`, "json", req, runtime), new RemoveUserAnalyzerResponse({}));
  }

  async renewAppGroup(appGroupIdentity: string): Promise<RenewAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renewAppGroupWithOptions(appGroupIdentity, headers, runtime);
  }

  async renewAppGroupWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RenewAppGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<RenewAppGroupResponse>(await this.doROARequest("RenewAppGroup", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/actions/renew`, "json", req, runtime), new RenewAppGroupResponse({}));
  }

  async replaceAppGroupCommodityCode(appGroupIdentity: string): Promise<ReplaceAppGroupCommodityCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.replaceAppGroupCommodityCodeWithOptions(appGroupIdentity, headers, runtime);
  }

  async replaceAppGroupCommodityCodeWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReplaceAppGroupCommodityCodeResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ReplaceAppGroupCommodityCodeResponse>(await this.doROARequest("ReplaceAppGroupCommodityCode", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/actions/to-instance-typed`, "json", req, runtime), new ReplaceAppGroupCommodityCodeResponse({}));
  }

  async saveSortScriptFile(appGroupIdentity: string, scriptName: string, appVersionId: string, fileName: string): Promise<SaveSortScriptFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.saveSortScriptFileWithOptions(appGroupIdentity, scriptName, appVersionId, fileName, headers, runtime);
  }

  async saveSortScriptFileWithOptions(appGroupIdentity: string, scriptName: string, appVersionId: string, fileName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SaveSortScriptFileResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<SaveSortScriptFileResponse>(await this.doROARequest("SaveSortScriptFile", "2017-12-25", "HTTPS", "PUT", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appVersionId}/sort-scripts/{scriptName}/files/src/{fileName}`, "json", req, runtime), new SaveSortScriptFileResponse({}));
  }

  async startSlowQueryAnalyzer(appGroupIdentity: string): Promise<StartSlowQueryAnalyzerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startSlowQueryAnalyzerWithOptions(appGroupIdentity, headers, runtime);
  }

  async startSlowQueryAnalyzerWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartSlowQueryAnalyzerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<StartSlowQueryAnalyzerResponse>(await this.doROARequest("StartSlowQueryAnalyzer", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/optimizers/slow-query/actions/run`, "json", req, runtime), new StartSlowQueryAnalyzerResponse({}));
  }

  async trainModel(appGroupIdentity: string, modelName: string): Promise<TrainModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.trainModelWithOptions(appGroupIdentity, modelName, headers, runtime);
  }

  async trainModelWithOptions(appGroupIdentity: string, modelName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TrainModelResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<TrainModelResponse>(await this.doROARequest("TrainModel", "2017-12-25", "HTTPS", "POST", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/algorithm/models/{modelName}/actions/train`, "json", req, runtime), new TrainModelResponse({}));
  }

  async updateABTestExperiment(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string): Promise<UpdateABTestExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABTestExperimentWithOptions(appGroupIdentity, sceneId, groupId, experimentId, headers, runtime);
  }

  async updateABTestExperimentWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateABTestExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<UpdateABTestExperimentResponse>(await this.doROARequest("UpdateABTestExperiment", "2017-12-25", "HTTPS", "PUT", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scenes/{sceneId}/groups/{groupId}/experiments/{experimentId}`, "json", req, runtime), new UpdateABTestExperimentResponse({}));
  }

  async updateABTestFixedFlowDividers(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string): Promise<UpdateABTestFixedFlowDividersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABTestFixedFlowDividersWithOptions(appGroupIdentity, sceneId, groupId, experimentId, headers, runtime);
  }

  async updateABTestFixedFlowDividersWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateABTestFixedFlowDividersResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<UpdateABTestFixedFlowDividersResponse>(await this.doROARequest("UpdateABTestFixedFlowDividers", "2017-12-25", "HTTPS", "PUT", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scenes/{sceneId}/groups/{groupId}/experiments/{experimentId}/fixed-flow-dividers`, "json", req, runtime), new UpdateABTestFixedFlowDividersResponse({}));
  }

  async updateABTestGroup(appGroupIdentity: string, sceneId: string, groupId: string): Promise<UpdateABTestGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABTestGroupWithOptions(appGroupIdentity, sceneId, groupId, headers, runtime);
  }

  async updateABTestGroupWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateABTestGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<UpdateABTestGroupResponse>(await this.doROARequest("UpdateABTestGroup", "2017-12-25", "HTTPS", "PUT", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scenes/{sceneId}/groups/{groupId}`, "json", req, runtime), new UpdateABTestGroupResponse({}));
  }

  async updateABTestScene(appGroupIdentity: string, sceneId: string): Promise<UpdateABTestSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABTestSceneWithOptions(appGroupIdentity, sceneId, headers, runtime);
  }

  async updateABTestSceneWithOptions(appGroupIdentity: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateABTestSceneResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<UpdateABTestSceneResponse>(await this.doROARequest("UpdateABTestScene", "2017-12-25", "HTTPS", "PUT", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/scenes/{sceneId}`, "json", req, runtime), new UpdateABTestSceneResponse({}));
  }

  async updateFetchFields(appGroupIdentity: string, appId: string, request: UpdateFetchFieldsRequest): Promise<UpdateFetchFieldsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFetchFieldsWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  async updateFetchFieldsWithOptions(appGroupIdentity: string, appId: string, request: UpdateFetchFieldsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateFetchFieldsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateFetchFieldsResponse>(await this.doROARequest("UpdateFetchFields", "2017-12-25", "HTTPS", "PUT", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/fetch-fields`, "json", req, runtime), new UpdateFetchFieldsResponse({}));
  }

  async updateSummaries(appGroupIdentity: string, appId: string, request: UpdateSummariesRequest): Promise<UpdateSummariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSummariesWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  async updateSummariesWithOptions(appGroupIdentity: string, appId: string, request: UpdateSummariesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSummariesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateSummariesResponse>(await this.doROARequest("UpdateSummaries", "2017-12-25", "HTTPS", "PUT", "AK", `/v4/openapi/app-groups/${appGroupIdentity}/apps/{appId}/summaries`, "json", req, runtime), new UpdateSummariesResponse({}));
  }

}
