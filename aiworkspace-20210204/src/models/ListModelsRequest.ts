// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListModelsRequestTag } from "./ListModelsRequestTag";


export class ListModelsRequest extends $dara.Model {
  /**
   * @remarks
   * The collection where the model is located. You can specify multiple collections and separate them with commas (,).
   * 
   * @example
   * AI4D,QuickStart
   */
  collections?: string;
  /**
   * @remarks
   * The domain. Only models in the domain are returned. Valid values: nlp (Natural Language Processing) and cv (Computer Vision).
   * 
   * @example
   * nlp
   */
  domain?: string;
  /**
   * @remarks
   * The label. Models whose label key or label value contains a specific label are filtered.
   * 
   * @example
   * key1
   */
  label?: string;
  /**
   * @remarks
   * The model name used to filter the returned models.
   */
  modelName?: string;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * Endpoint
   */
  modelType?: string;
  /**
   * @remarks
   * The order in which the entries are sorted by the specific field on the returned page. Default value: ASC.
   * 
   * *   ASC
   * *   DESC
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The model source used to filter the models that belong to a community or organization, such as ModelScope and Hugging Face.
   * 
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The provider. If you configure this parameter, only the models exposed by the provider are returned. If you leave this parameter empty, only models owned by the user are returned.
   * 
   * @example
   * pai
   */
  provider?: string;
  /**
   * @remarks
   * The query condition. For example, if you set the value to nlp, all models that match ModelName, Domain, Task, LabelKey, and LabelValue are returned.
   * 
   * @example
   * nlp
   */
  query?: string;
  /**
   * @remarks
   * The field used to sort the results. The GmtCreateTime field is used for sorting.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The tags of the model.
   */
  tag?: ListModelsRequestTag[];
  /**
   * @remarks
   * The task used to filter the models that belong to the task type. Example: text-classification.
   * 
   * @example
   * text-classification
   */
  task?: string;
  /**
   * @remarks
   * The workspace ID. Only models in this workspace are queried. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * @example
   * 324**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      collections: 'Collections',
      domain: 'Domain',
      label: 'Label',
      modelName: 'ModelName',
      modelType: 'ModelType',
      order: 'Order',
      origin: 'Origin',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      provider: 'Provider',
      query: 'Query',
      sortBy: 'SortBy',
      tag: 'Tag',
      task: 'Task',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collections: 'string',
      domain: 'string',
      label: 'string',
      modelName: 'string',
      modelType: 'string',
      order: 'string',
      origin: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      provider: 'string',
      query: 'string',
      sortBy: 'string',
      tag: { 'type': 'array', 'itemType': ListModelsRequestTag },
      task: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

