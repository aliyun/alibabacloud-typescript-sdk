// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddImageRequest extends $tea.Model {
  containerImageSpec?: AddImageRequestContainerImageSpec;
  description?: string;
  imageVersion?: string;
  name?: string;
  VMImageSpec?: AddImageRequestVMImageSpec;
  static names(): { [key: string]: string } {
    return {
      containerImageSpec: 'ContainerImageSpec',
      description: 'Description',
      imageVersion: 'ImageVersion',
      name: 'Name',
      VMImageSpec: 'VMImageSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerImageSpec: AddImageRequestContainerImageSpec,
      description: 'string',
      imageVersion: 'string',
      name: 'string',
      VMImageSpec: AddImageRequestVMImageSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageShrinkRequest extends $tea.Model {
  containerImageSpecShrink?: string;
  description?: string;
  imageVersion?: string;
  name?: string;
  VMImageSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      containerImageSpecShrink: 'ContainerImageSpec',
      description: 'Description',
      imageVersion: 'ImageVersion',
      name: 'Name',
      VMImageSpecShrink: 'VMImageSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerImageSpecShrink: 'string',
      description: 'string',
      imageVersion: 'string',
      name: 'string',
      VMImageSpecShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponseBody extends $tea.Model {
  imageId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddImageResponseBody;
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
      body: AddImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequest extends $tea.Model {
  deploymentPolicy?: CreateJobRequestDeploymentPolicy;
  jobDescription?: string;
  jobName?: string;
  tasks?: CreateJobRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      deploymentPolicy: 'DeploymentPolicy',
      jobDescription: 'JobDescription',
      jobName: 'JobName',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentPolicy: CreateJobRequestDeploymentPolicy,
      jobDescription: 'string',
      jobName: 'string',
      tasks: { 'type': 'array', 'itemType': CreateJobRequestTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobShrinkRequest extends $tea.Model {
  deploymentPolicyShrink?: string;
  jobDescription?: string;
  jobName?: string;
  tasksShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentPolicyShrink: 'DeploymentPolicy',
      jobDescription: 'JobDescription',
      jobName: 'JobName',
      tasksShrink: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentPolicyShrink: 'string',
      jobDescription: 'string',
      jobName: 'string',
      tasksShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  tasks?: CreateJobResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': CreateJobResponseBodyTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateJobResponseBody;
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
      body: CreateJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsRequest extends $tea.Model {
  executorIds?: string[];
  jobSpec?: DeleteJobsRequestJobSpec[];
  static names(): { [key: string]: string } {
    return {
      executorIds: 'ExecutorIds',
      jobSpec: 'JobSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorIds: { 'type': 'array', 'itemType': 'string' },
      jobSpec: { 'type': 'array', 'itemType': DeleteJobsRequestJobSpec },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsShrinkRequest extends $tea.Model {
  executorIdsShrink?: string;
  jobSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      executorIdsShrink: 'ExecutorIds',
      jobSpecShrink: 'JobSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorIdsShrink: 'string',
      jobSpecShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class DeleteJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteJobsResponseBody;
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
      body: DeleteJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMetricDataRequest extends $tea.Model {
  arrayIndex?: number[];
  jobId?: string;
  metricName?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndex: 'ArrayIndex',
      jobId: 'JobId',
      metricName: 'MetricName',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndex: { 'type': 'array', 'itemType': 'number' },
      jobId: 'string',
      metricName: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMetricDataShrinkRequest extends $tea.Model {
  arrayIndexShrink?: string;
  jobId?: string;
  metricName?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndexShrink: 'ArrayIndex',
      jobId: 'JobId',
      metricName: 'MetricName',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndexShrink: 'string',
      jobId: 'string',
      metricName: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMetricDataResponseBody extends $tea.Model {
  dataPoints?: string;
  period?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPoints: 'DataPoints',
      period: 'Period',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoints: 'string',
      period: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMetricDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeJobMetricDataResponseBody;
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
      body: DescribeJobMetricDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMetricLastRequest extends $tea.Model {
  arrayIndex?: number[];
  jobId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndex: 'ArrayIndex',
      jobId: 'JobId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndex: { 'type': 'array', 'itemType': 'number' },
      jobId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMetricLastShrinkRequest extends $tea.Model {
  arrayIndexShrink?: string;
  jobId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndexShrink: 'ArrayIndex',
      jobId: 'JobId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndexShrink: 'string',
      jobId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMetricLastResponseBody extends $tea.Model {
  metrics?: DescribeJobMetricLastResponseBodyMetrics[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': DescribeJobMetricLastResponseBodyMetrics },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMetricLastResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeJobMetricLastResponseBody;
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
      body: DescribeJobMetricLastResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageRequest extends $tea.Model {
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBody extends $tea.Model {
  image?: GetImageResponseBodyImage;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: GetImageResponseBodyImage,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetImageResponseBody;
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
      body: GetImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRequest extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBody extends $tea.Model {
  jobInfo?: GetJobResponseBodyJobInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobInfo: 'JobInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfo: GetJobResponseBodyJobInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobResponseBody;
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
      body: GetJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsRequest extends $tea.Model {
  filter?: ListExecutorsRequestFilter;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: ListExecutorsRequestFilter,
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsShrinkRequest extends $tea.Model {
  filterShrink?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      filterShrink: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterShrink: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsResponseBody extends $tea.Model {
  executors?: ListExecutorsResponseBodyExecutors[];
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      executors: 'Executors',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executors: { 'type': 'array', 'itemType': ListExecutorsResponseBodyExecutors },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExecutorsResponseBody;
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
      body: ListExecutorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesRequest extends $tea.Model {
  imageIds?: string[];
  imageNames?: string[];
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      imageIds: 'ImageIds',
      imageNames: 'ImageNames',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIds: { 'type': 'array', 'itemType': 'string' },
      imageNames: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesShrinkRequest extends $tea.Model {
  imageIdsShrink?: string;
  imageNamesShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      imageIdsShrink: 'ImageIds',
      imageNamesShrink: 'ImageNames',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIdsShrink: 'string',
      imageNamesShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBody extends $tea.Model {
  images?: ListImagesResponseBodyImages[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListImagesResponseBodyImages },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListImagesResponseBody;
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
      body: ListImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutorsRequest extends $tea.Model {
  jobId?: string;
  pageNumber?: string;
  pageSize?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutorsResponseBody extends $tea.Model {
  executors?: ListJobExecutorsResponseBodyExecutors[];
  jobId?: string;
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  taskName?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      executors: 'Executors',
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      taskName: 'TaskName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executors: { 'type': 'array', 'itemType': ListJobExecutorsResponseBodyExecutors },
      jobId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      taskName: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutorsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobExecutorsResponseBody;
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
      body: ListJobExecutorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $tea.Model {
  filter?: ListJobsRequestFilter;
  pageNumber?: string;
  pageSize?: string;
  sortBy?: ListJobsRequestSortBy;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: ListJobsRequestFilter,
      pageNumber: 'string',
      pageSize: 'string',
      sortBy: ListJobsRequestSortBy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsShrinkRequest extends $tea.Model {
  filterShrink?: string;
  pageNumber?: string;
  pageSize?: string;
  sortByShrink?: string;
  static names(): { [key: string]: string } {
    return {
      filterShrink: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortByShrink: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterShrink: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      sortByShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $tea.Model {
  jobList?: ListJobsResponseBodyJobList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: { 'type': 'array', 'itemType': ListJobsResponseBodyJobList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobsResponseBody;
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
      body: ListJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageRequest extends $tea.Model {
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageResponseBody extends $tea.Model {
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

export class RemoveImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveImageResponseBody;
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
      body: RemoveImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageRequestContainerImageSpecRegistryCredential extends $tea.Model {
  password?: string;
  server?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      server: 'Server',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      server: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageRequestContainerImageSpec extends $tea.Model {
  isACREnterprise?: boolean;
  isACRRegistry?: boolean;
  registryCredential?: AddImageRequestContainerImageSpecRegistryCredential;
  registryCriId?: string;
  registryUrl?: string;
  static names(): { [key: string]: string } {
    return {
      isACREnterprise: 'IsACREnterprise',
      isACRRegistry: 'IsACRRegistry',
      registryCredential: 'RegistryCredential',
      registryCriId: 'RegistryCriId',
      registryUrl: 'RegistryUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isACREnterprise: 'boolean',
      isACRRegistry: 'boolean',
      registryCredential: AddImageRequestContainerImageSpecRegistryCredential,
      registryCriId: 'string',
      registryUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageRequestVMImageSpec extends $tea.Model {
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestDeploymentPolicyNetwork extends $tea.Model {
  vswitch?: string[];
  static names(): { [key: string]: string } {
    return {
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitch: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestDeploymentPolicy extends $tea.Model {
  allocationSpec?: string;
  network?: CreateJobRequestDeploymentPolicyNetwork;
  static names(): { [key: string]: string } {
    return {
      allocationSpec: 'AllocationSpec',
      network: 'Network',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationSpec: 'string',
      network: CreateJobRequestDeploymentPolicyNetwork,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksExecutorPolicyArraySpec extends $tea.Model {
  indexEnd?: number;
  indexStart?: number;
  indexStep?: number;
  static names(): { [key: string]: string } {
    return {
      indexEnd: 'IndexEnd',
      indexStart: 'IndexStart',
      indexStep: 'IndexStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexEnd: 'number',
      indexStart: 'number',
      indexStep: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksExecutorPolicy extends $tea.Model {
  arraySpec?: CreateJobRequestTasksExecutorPolicyArraySpec;
  maxCount?: number;
  static names(): { [key: string]: string } {
    return {
      arraySpec: 'ArraySpec',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arraySpec: CreateJobRequestTasksExecutorPolicyArraySpec,
      maxCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksTaskSpecResourceDisks extends $tea.Model {
  size?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksTaskSpecResource extends $tea.Model {
  cores?: number;
  disks?: CreateJobRequestTasksTaskSpecResourceDisks[];
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      disks: 'Disks',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      disks: { 'type': 'array', 'itemType': CreateJobRequestTasksTaskSpecResourceDisks },
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksTaskSpecTaskExecutorContainerEnvironmentVars extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksTaskSpecTaskExecutorContainer extends $tea.Model {
  command?: string[];
  environmentVars?: CreateJobRequestTasksTaskSpecTaskExecutorContainerEnvironmentVars[];
  image?: string;
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      environmentVars: 'EnvironmentVars',
      image: 'Image',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': 'string' },
      environmentVars: { 'type': 'array', 'itemType': CreateJobRequestTasksTaskSpecTaskExecutorContainerEnvironmentVars },
      image: 'string',
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksTaskSpecTaskExecutorVM extends $tea.Model {
  image?: string;
  prologScript?: string;
  script?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      prologScript: 'PrologScript',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      prologScript: 'string',
      script: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksTaskSpecTaskExecutor extends $tea.Model {
  container?: CreateJobRequestTasksTaskSpecTaskExecutorContainer;
  VM?: CreateJobRequestTasksTaskSpecTaskExecutorVM;
  static names(): { [key: string]: string } {
    return {
      container: 'Container',
      VM: 'VM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      container: CreateJobRequestTasksTaskSpecTaskExecutorContainer,
      VM: CreateJobRequestTasksTaskSpecTaskExecutorVM,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksTaskSpecVolumeMount extends $tea.Model {
  mountOptions?: string;
  mountPath?: string;
  volumeDriver?: string;
  static names(): { [key: string]: string } {
    return {
      mountOptions: 'MountOptions',
      mountPath: 'MountPath',
      volumeDriver: 'VolumeDriver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountOptions: 'string',
      mountPath: 'string',
      volumeDriver: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksTaskSpec extends $tea.Model {
  resource?: CreateJobRequestTasksTaskSpecResource;
  taskExecutor?: CreateJobRequestTasksTaskSpecTaskExecutor[];
  volumeMount?: CreateJobRequestTasksTaskSpecVolumeMount[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
      taskExecutor: 'TaskExecutor',
      volumeMount: 'VolumeMount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: CreateJobRequestTasksTaskSpecResource,
      taskExecutor: { 'type': 'array', 'itemType': CreateJobRequestTasksTaskSpecTaskExecutor },
      volumeMount: { 'type': 'array', 'itemType': CreateJobRequestTasksTaskSpecVolumeMount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasks extends $tea.Model {
  executorPolicy?: CreateJobRequestTasksExecutorPolicy;
  taskName?: string;
  taskSpec?: CreateJobRequestTasksTaskSpec;
  taskSustainable?: boolean;
  static names(): { [key: string]: string } {
    return {
      executorPolicy: 'ExecutorPolicy',
      taskName: 'TaskName',
      taskSpec: 'TaskSpec',
      taskSustainable: 'TaskSustainable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorPolicy: CreateJobRequestTasksExecutorPolicy,
      taskName: 'string',
      taskSpec: CreateJobRequestTasksTaskSpec,
      taskSustainable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBodyTasks extends $tea.Model {
  executorIds?: string[];
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      executorIds: 'ExecutorIds',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorIds: { 'type': 'array', 'itemType': 'string' },
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsRequestJobSpecTaskSpec extends $tea.Model {
  arrayIndex?: number[];
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndex: 'ArrayIndex',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndex: { 'type': 'array', 'itemType': 'number' },
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsRequestJobSpec extends $tea.Model {
  jobId?: string;
  taskSpec?: DeleteJobsRequestJobSpecTaskSpec[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      taskSpec: 'TaskSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      taskSpec: { 'type': 'array', 'itemType': DeleteJobsRequestJobSpecTaskSpec },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobMetricLastResponseBodyMetrics extends $tea.Model {
  arrayIndex?: number;
  metric?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndex: 'ArrayIndex',
      metric: 'Metric',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndex: 'number',
      metric: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyImageContainerImageSpecRegistryCredential extends $tea.Model {
  password?: string;
  server?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      server: 'Server',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      server: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyImageContainerImageSpec extends $tea.Model {
  isACREnterprise?: boolean;
  isACRRegistry?: boolean;
  registryCredential?: GetImageResponseBodyImageContainerImageSpecRegistryCredential;
  registryCriId?: string;
  registryUrl?: string;
  static names(): { [key: string]: string } {
    return {
      isACREnterprise: 'IsACREnterprise',
      isACRRegistry: 'IsACRRegistry',
      registryCredential: 'RegistryCredential',
      registryCriId: 'RegistryCriId',
      registryUrl: 'RegistryUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isACREnterprise: 'boolean',
      isACRRegistry: 'boolean',
      registryCredential: GetImageResponseBodyImageContainerImageSpecRegistryCredential,
      registryCriId: 'string',
      registryUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyImageVMImageSpec extends $tea.Model {
  architecture?: string;
  imageId?: string;
  osTag?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      imageId: 'ImageId',
      osTag: 'OsTag',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      imageId: 'string',
      osTag: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyImage extends $tea.Model {
  containerImageSpec?: GetImageResponseBodyImageContainerImageSpec;
  createTime?: string;
  description?: string;
  imageType?: string;
  name?: string;
  size?: string;
  VMImageSpec?: GetImageResponseBodyImageVMImageSpec;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      containerImageSpec: 'ContainerImageSpec',
      createTime: 'CreateTime',
      description: 'Description',
      imageType: 'ImageType',
      name: 'Name',
      size: 'Size',
      VMImageSpec: 'VMImageSpec',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerImageSpec: GetImageResponseBodyImageContainerImageSpec,
      createTime: 'string',
      description: 'string',
      imageType: 'string',
      name: 'string',
      size: 'string',
      VMImageSpec: GetImageResponseBodyImageVMImageSpec,
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoDeploymentPolicyNetwork extends $tea.Model {
  vswitch?: string[];
  static names(): { [key: string]: string } {
    return {
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitch: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoDeploymentPolicy extends $tea.Model {
  allocationSpec?: string;
  network?: GetJobResponseBodyJobInfoDeploymentPolicyNetwork;
  static names(): { [key: string]: string } {
    return {
      allocationSpec: 'AllocationSpec',
      network: 'Network',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationSpec: 'string',
      network: GetJobResponseBodyJobInfoDeploymentPolicyNetwork,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksExecutorPolicyArraySpec extends $tea.Model {
  indexEnd?: number;
  indexStart?: number;
  indexStep?: number;
  static names(): { [key: string]: string } {
    return {
      indexEnd: 'IndexEnd',
      indexStart: 'IndexStart',
      indexStep: 'IndexStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexEnd: 'number',
      indexStart: 'number',
      indexStep: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksExecutorPolicy extends $tea.Model {
  arraySpec?: GetJobResponseBodyJobInfoTasksExecutorPolicyArraySpec;
  maxCount?: number;
  static names(): { [key: string]: string } {
    return {
      arraySpec: 'ArraySpec',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arraySpec: GetJobResponseBodyJobInfoTasksExecutorPolicyArraySpec,
      maxCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksExecutorStatus extends $tea.Model {
  arrayId?: number;
  createTime?: string;
  endTime?: string;
  startTime?: string;
  status?: string;
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      arrayId: 'ArrayId',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      startTime: 'StartTime',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayId: 'number',
      createTime: 'string',
      endTime: 'string',
      startTime: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksTaskSpecResourceDisks extends $tea.Model {
  size?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksTaskSpecResource extends $tea.Model {
  cores?: number;
  disks?: GetJobResponseBodyJobInfoTasksTaskSpecResourceDisks[];
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      disks: 'Disks',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      disks: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasksTaskSpecResourceDisks },
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutorVM extends $tea.Model {
  image?: string;
  prologScript?: string;
  script?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      prologScript: 'PrologScript',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      prologScript: 'string',
      script: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutor extends $tea.Model {
  VM?: GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutorVM;
  static names(): { [key: string]: string } {
    return {
      VM: 'VM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VM: GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutorVM,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksTaskSpec extends $tea.Model {
  resource?: GetJobResponseBodyJobInfoTasksTaskSpecResource;
  taskExecutor?: GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutor[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
      taskExecutor: 'TaskExecutor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: GetJobResponseBodyJobInfoTasksTaskSpecResource,
      taskExecutor: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutor },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasks extends $tea.Model {
  executorPolicy?: GetJobResponseBodyJobInfoTasksExecutorPolicy;
  executorStatus?: GetJobResponseBodyJobInfoTasksExecutorStatus[];
  taskName?: string;
  taskSpec?: GetJobResponseBodyJobInfoTasksTaskSpec;
  taskSustainable?: boolean;
  static names(): { [key: string]: string } {
    return {
      executorPolicy: 'ExecutorPolicy',
      executorStatus: 'ExecutorStatus',
      taskName: 'TaskName',
      taskSpec: 'TaskSpec',
      taskSustainable: 'TaskSustainable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorPolicy: GetJobResponseBodyJobInfoTasksExecutorPolicy,
      executorStatus: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasksExecutorStatus },
      taskName: 'string',
      taskSpec: GetJobResponseBodyJobInfoTasksTaskSpec,
      taskSustainable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfo extends $tea.Model {
  createTime?: string;
  deploymentPolicy?: GetJobResponseBodyJobInfoDeploymentPolicy;
  endTime?: string;
  jobDescription?: string;
  jobId?: string;
  jobName?: string;
  startTime?: string;
  status?: string;
  tasks?: GetJobResponseBodyJobInfoTasks[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deploymentPolicy: 'DeploymentPolicy',
      endTime: 'EndTime',
      jobDescription: 'JobDescription',
      jobId: 'JobId',
      jobName: 'JobName',
      startTime: 'StartTime',
      status: 'Status',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deploymentPolicy: GetJobResponseBodyJobInfoDeploymentPolicy,
      endTime: 'string',
      jobDescription: 'string',
      jobId: 'string',
      jobName: 'string',
      startTime: 'string',
      status: 'string',
      tasks: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsRequestFilter extends $tea.Model {
  executorIds?: string[];
  ipAddresses?: string[];
  jobName?: string;
  timeCreatedAfter?: number;
  timeCreatedBefore?: number;
  static names(): { [key: string]: string } {
    return {
      executorIds: 'ExecutorIds',
      ipAddresses: 'IpAddresses',
      jobName: 'JobName',
      timeCreatedAfter: 'TimeCreatedAfter',
      timeCreatedBefore: 'TimeCreatedBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorIds: { 'type': 'array', 'itemType': 'string' },
      ipAddresses: { 'type': 'array', 'itemType': 'string' },
      jobName: 'string',
      timeCreatedAfter: 'number',
      timeCreatedBefore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsResponseBodyExecutors extends $tea.Model {
  arrayIndex?: number;
  createTime?: string;
  endTime?: string;
  executorId?: string;
  hostName?: string[];
  ipAddress?: string[];
  jobId?: string;
  jobName?: string;
  status?: string;
  statusReason?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndex: 'ArrayIndex',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      executorId: 'ExecutorId',
      hostName: 'HostName',
      ipAddress: 'IpAddress',
      jobId: 'JobId',
      jobName: 'JobName',
      status: 'Status',
      statusReason: 'StatusReason',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndex: 'number',
      createTime: 'string',
      endTime: 'string',
      executorId: 'string',
      hostName: { 'type': 'array', 'itemType': 'string' },
      ipAddress: { 'type': 'array', 'itemType': 'string' },
      jobId: 'string',
      jobName: 'string',
      status: 'string',
      statusReason: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyImages extends $tea.Model {
  createTime?: string;
  description?: string;
  imageId?: string;
  imageType?: string;
  name?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      imageId: 'ImageId',
      imageType: 'ImageType',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      imageId: 'string',
      imageType: 'string',
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutorsResponseBodyExecutors extends $tea.Model {
  arrayIndex?: number;
  createTime?: string;
  endTime?: string;
  hostName?: string[];
  ipAddress?: string[];
  status?: string;
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndex: 'ArrayIndex',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      hostName: 'HostName',
      ipAddress: 'IpAddress',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndex: 'number',
      createTime: 'string',
      endTime: 'string',
      hostName: { 'type': 'array', 'itemType': 'string' },
      ipAddress: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      statusReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequestFilter extends $tea.Model {
  jobId?: string;
  jobName?: string;
  status?: string;
  timeCreatedAfter?: number;
  timeCreatedBefore?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobName: 'JobName',
      status: 'Status',
      timeCreatedAfter: 'TimeCreatedAfter',
      timeCreatedBefore: 'TimeCreatedBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jobName: 'string',
      status: 'string',
      timeCreatedAfter: 'number',
      timeCreatedBefore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequestSortBy extends $tea.Model {
  label?: string;
  order?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      order: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobList extends $tea.Model {
  createTime?: string;
  endTime?: string;
  executorCount?: number;
  jobDescription?: string;
  jobId?: string;
  jobName?: string;
  ownerUid?: string;
  startTime?: string;
  status?: string;
  taskCount?: number;
  taskSustainable?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      executorCount: 'ExecutorCount',
      jobDescription: 'JobDescription',
      jobId: 'JobId',
      jobName: 'JobName',
      ownerUid: 'OwnerUid',
      startTime: 'StartTime',
      status: 'Status',
      taskCount: 'TaskCount',
      taskSustainable: 'TaskSustainable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endTime: 'string',
      executorCount: 'number',
      jobDescription: 'string',
      jobId: 'string',
      jobName: 'string',
      ownerUid: 'string',
      startTime: 'string',
      status: 'string',
      taskCount: 'number',
      taskSustainable: 'boolean',
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
    this._endpoint = this.getEndpoint("ehpcinstant", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary 添加托管侧用户自定义镜像
   *
   * @param tmpReq AddImageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddImageResponse
   */
  async addImageWithOptions(tmpReq: AddImageRequest, runtime: $Util.RuntimeOptions): Promise<AddImageResponse> {
    Util.validateModel(tmpReq);
    let request = new AddImageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.containerImageSpec)) {
      request.containerImageSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.containerImageSpec, "ContainerImageSpec", "json");
    }

    if (!Util.isUnset(tmpReq.VMImageSpec)) {
      request.VMImageSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.VMImageSpec, "VMImageSpec", "json");
    }

    let query = { };
    if (!Util.isUnset(request.containerImageSpecShrink)) {
      query["ContainerImageSpec"] = request.containerImageSpecShrink;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.imageVersion)) {
      query["ImageVersion"] = request.imageVersion;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.VMImageSpecShrink)) {
      query["VMImageSpec"] = request.VMImageSpecShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddImage",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddImageResponse>(await this.callApi(params, req, runtime), new AddImageResponse({}));
  }

  /**
   * @summary 添加托管侧用户自定义镜像
   *
   * @param request AddImageRequest
   * @return AddImageResponse
   */
  async addImage(request: AddImageRequest): Promise<AddImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addImageWithOptions(request, runtime);
  }

  /**
   * @summary 提交任务
   *
   * @param tmpReq CreateJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateJobResponse
   */
  async createJobWithOptions(tmpReq: CreateJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deploymentPolicy)) {
      request.deploymentPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deploymentPolicy, "DeploymentPolicy", "json");
    }

    if (!Util.isUnset(tmpReq.tasks)) {
      request.tasksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tasks, "Tasks", "json");
    }

    let query = { };
    if (!Util.isUnset(request.deploymentPolicyShrink)) {
      query["DeploymentPolicy"] = request.deploymentPolicyShrink;
    }

    if (!Util.isUnset(request.jobDescription)) {
      query["JobDescription"] = request.jobDescription;
    }

    if (!Util.isUnset(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!Util.isUnset(request.tasksShrink)) {
      query["Tasks"] = request.tasksShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateJob",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateJobResponse>(await this.callApi(params, req, runtime), new CreateJobResponse({}));
  }

  /**
   * @summary 提交任务
   *
   * @param request CreateJobRequest
   * @return CreateJobResponse
   */
  async createJob(request: CreateJobRequest): Promise<CreateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobWithOptions(request, runtime);
  }

  /**
   * @summary 删除作业
   *
   * @param tmpReq DeleteJobsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteJobsResponse
   */
  async deleteJobsWithOptions(tmpReq: DeleteJobsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteJobsResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.executorIds)) {
      request.executorIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executorIds, "ExecutorIds", "json");
    }

    if (!Util.isUnset(tmpReq.jobSpec)) {
      request.jobSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobSpec, "JobSpec", "json");
    }

    let query = { };
    if (!Util.isUnset(request.executorIdsShrink)) {
      query["ExecutorIds"] = request.executorIdsShrink;
    }

    if (!Util.isUnset(request.jobSpecShrink)) {
      query["JobSpec"] = request.jobSpecShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteJobs",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteJobsResponse>(await this.callApi(params, req, runtime), new DeleteJobsResponse({}));
  }

  /**
   * @summary 删除作业
   *
   * @param request DeleteJobsRequest
   * @return DeleteJobsResponse
   */
  async deleteJobs(request: DeleteJobsRequest): Promise<DeleteJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteJobsWithOptions(request, runtime);
  }

  /**
   * @summary 查询作业性能数据
   *
   * @param tmpReq DescribeJobMetricDataRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeJobMetricDataResponse
   */
  async describeJobMetricDataWithOptions(tmpReq: DescribeJobMetricDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJobMetricDataResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeJobMetricDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.arrayIndex)) {
      request.arrayIndexShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.arrayIndex, "ArrayIndex", "json");
    }

    let query = { };
    if (!Util.isUnset(request.arrayIndexShrink)) {
      query["ArrayIndex"] = request.arrayIndexShrink;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeJobMetricData",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeJobMetricDataResponse>(await this.callApi(params, req, runtime), new DescribeJobMetricDataResponse({}));
  }

  /**
   * @summary 查询作业性能数据
   *
   * @param request DescribeJobMetricDataRequest
   * @return DescribeJobMetricDataResponse
   */
  async describeJobMetricData(request: DescribeJobMetricDataRequest): Promise<DescribeJobMetricDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJobMetricDataWithOptions(request, runtime);
  }

  /**
   * @summary 查询作业即时监控项
   *
   * @param tmpReq DescribeJobMetricLastRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeJobMetricLastResponse
   */
  async describeJobMetricLastWithOptions(tmpReq: DescribeJobMetricLastRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJobMetricLastResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeJobMetricLastShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.arrayIndex)) {
      request.arrayIndexShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.arrayIndex, "ArrayIndex", "json");
    }

    let query = { };
    if (!Util.isUnset(request.arrayIndexShrink)) {
      query["ArrayIndex"] = request.arrayIndexShrink;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeJobMetricLast",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeJobMetricLastResponse>(await this.callApi(params, req, runtime), new DescribeJobMetricLastResponse({}));
  }

  /**
   * @summary 查询作业即时监控项
   *
   * @param request DescribeJobMetricLastRequest
   * @return DescribeJobMetricLastResponse
   */
  async describeJobMetricLast(request: DescribeJobMetricLastRequest): Promise<DescribeJobMetricLastResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJobMetricLastWithOptions(request, runtime);
  }

  /**
   * @summary 查询托管侧镜像详情。
   *
   * @param request GetImageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetImageResponse
   */
  async getImageWithOptions(request: GetImageRequest, runtime: $Util.RuntimeOptions): Promise<GetImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetImage",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetImageResponse>(await this.callApi(params, req, runtime), new GetImageResponse({}));
  }

  /**
   * @summary 查询托管侧镜像详情。
   *
   * @param request GetImageRequest
   * @return GetImageResponse
   */
  async getImage(request: GetImageRequest): Promise<GetImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImageWithOptions(request, runtime);
  }

  /**
   * @summary 查询作业详情
   *
   * @param request GetJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetJobResponse
   */
  async getJobWithOptions(request: GetJobRequest, runtime: $Util.RuntimeOptions): Promise<GetJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJob",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobResponse>(await this.callApi(params, req, runtime), new GetJobResponse({}));
  }

  /**
   * @summary 查询作业详情
   *
   * @param request GetJobRequest
   * @return GetJobResponse
   */
  async getJob(request: GetJobRequest): Promise<GetJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobWithOptions(request, runtime);
  }

  /**
   * @summary 查询全局Executor信息
   *
   * @param tmpReq ListExecutorsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListExecutorsResponse
   */
  async listExecutorsWithOptions(tmpReq: ListExecutorsRequest, runtime: $Util.RuntimeOptions): Promise<ListExecutorsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListExecutorsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let query = { };
    if (!Util.isUnset(request.filterShrink)) {
      query["Filter"] = request.filterShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExecutors",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListExecutorsResponse>(await this.callApi(params, req, runtime), new ListExecutorsResponse({}));
  }

  /**
   * @summary 查询全局Executor信息
   *
   * @param request ListExecutorsRequest
   * @return ListExecutorsResponse
   */
  async listExecutors(request: ListExecutorsRequest): Promise<ListExecutorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExecutorsWithOptions(request, runtime);
  }

  /**
   * @summary 查看托管侧镜像列表
   *
   * @param tmpReq ListImagesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListImagesResponse
   */
  async listImagesWithOptions(tmpReq: ListImagesRequest, runtime: $Util.RuntimeOptions): Promise<ListImagesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListImagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.imageIds)) {
      request.imageIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageIds, "ImageIds", "json");
    }

    if (!Util.isUnset(tmpReq.imageNames)) {
      request.imageNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageNames, "ImageNames", "json");
    }

    let query = { };
    if (!Util.isUnset(request.imageIdsShrink)) {
      query["ImageIds"] = request.imageIdsShrink;
    }

    if (!Util.isUnset(request.imageNamesShrink)) {
      query["ImageNames"] = request.imageNamesShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListImages",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListImagesResponse>(await this.callApi(params, req, runtime), new ListImagesResponse({}));
  }

  /**
   * @summary 查看托管侧镜像列表
   *
   * @param request ListImagesRequest
   * @return ListImagesResponse
   */
  async listImages(request: ListImagesRequest): Promise<ListImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listImagesWithOptions(request, runtime);
  }

  /**
   * @summary 查询作业Executor信息
   *
   * @param request ListJobExecutorsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListJobExecutorsResponse
   */
  async listJobExecutorsWithOptions(request: ListJobExecutorsRequest, runtime: $Util.RuntimeOptions): Promise<ListJobExecutorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobExecutors",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListJobExecutorsResponse>(await this.callApi(params, req, runtime), new ListJobExecutorsResponse({}));
  }

  /**
   * @summary 查询作业Executor信息
   *
   * @param request ListJobExecutorsRequest
   * @return ListJobExecutorsResponse
   */
  async listJobExecutors(request: ListJobExecutorsRequest): Promise<ListJobExecutorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobExecutorsWithOptions(request, runtime);
  }

  /**
   * @summary 查询作业列表
   *
   * @param tmpReq ListJobsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListJobsResponse
   */
  async listJobsWithOptions(tmpReq: ListJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListJobsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    if (!Util.isUnset(tmpReq.sortBy)) {
      request.sortByShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sortBy, "SortBy", "json");
    }

    let query = { };
    if (!Util.isUnset(request.filterShrink)) {
      query["Filter"] = request.filterShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortByShrink)) {
      query["SortBy"] = request.sortByShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobs",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
  }

  /**
   * @summary 查询作业列表
   *
   * @param request ListJobsRequest
   * @return ListJobsResponse
   */
  async listJobs(request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  /**
   * @summary 移除托管侧镜像信息。
   *
   * @param request RemoveImageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RemoveImageResponse
   */
  async removeImageWithOptions(request: RemoveImageRequest, runtime: $Util.RuntimeOptions): Promise<RemoveImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveImage",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveImageResponse>(await this.callApi(params, req, runtime), new RemoveImageResponse({}));
  }

  /**
   * @summary 移除托管侧镜像信息。
   *
   * @param request RemoveImageRequest
   * @return RemoveImageResponse
   */
  async removeImage(request: RemoveImageRequest): Promise<RemoveImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeImageWithOptions(request, runtime);
  }

}
