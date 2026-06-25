// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The collections to which the model belongs. You can specify multiple collections. Separate them with commas (,).
   * 
   * @example
   * AI4D,QuickStart
   */
  collections?: string;
  /**
   * @remarks
   * The conditions.
   */
  conditionsShrink?: string;
  /**
   * @remarks
   * The domain. This parameter is used to filter the model list by domain. Examples: nlp (natural language processing) and cv (computer vision).
   * 
   * @example
   * nlp
   */
  domain?: string;
  /**
   * @remarks
   * The label string. This parameter is used to filter the list. Models are returned if their label keys or values contain the specified string.
   * 
   * @example
   * key1
   */
  label?: string;
  /**
   * @remarks
   * The model name. This parameter is used to filter the model list.
   * 
   * @example
   * Sentiment analysis
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
   * The order in which to sort the results of a paged query. The default value is ASC.
   * 
   * - ASC: ascending order.
   * 
   * - DESC: descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The model source. This parameter is used to filter the model list by community or organization. Examples: ModelScope and HuggingFace.
   * 
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @remarks
   * The page number of the model list. The value starts from 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of models to display on each page in a paged query. The default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The provider. If you specify a provider, only the public models from that provider are returned. If you leave this parameter empty, your own models are returned.
   * 
   * @example
   * pai
   */
  provider?: string;
  /**
   * @remarks
   * The query condition. This parameter performs a fuzzy match on ModelName, Domain, Task, LabelKey, and LabelValue. For example, if you enter nlp, models that match in any of these fields are returned.
   * 
   * @example
   * nlp
   */
  query?: string;
  /**
   * @remarks
   * The field to use for sorting in a paged query. Currently, only the GmtCreateTime field is supported.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The list of tags.
   * 
   * @example
   * Endpoint
   */
  tagShrink?: string;
  /**
   * @remarks
   * The task. This parameter is used to filter the model list by task type. Example: text-classification.
   * 
   * @example
   * text-classification
   */
  task?: string;
  /**
   * @remarks
   * The workspace ID. The returned list contains only the models in the specified workspace. For more information about how to obtain a workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * @example
   * 324**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      collections: 'Collections',
      conditionsShrink: 'Conditions',
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
      tagShrink: 'Tag',
      task: 'Task',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collections: 'string',
      conditionsShrink: 'string',
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
      tagShrink: 'string',
      task: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

