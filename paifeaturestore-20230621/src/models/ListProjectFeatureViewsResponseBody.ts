// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectFeatureViewsResponseBodyFeatureViewsFeatures extends $dara.Model {
  /**
   * @remarks
   * A list of field attributes. Valid values:
   * 
   * - Partition: Indicates that the feature is a partition field.
   * 
   * - PrimaryKey: Indicates that the feature is a primary key.
   * 
   * - EventTime: Indicates that the feature represents the event time.
   */
  attributes?: string[];
  /**
   * @remarks
   * The feature name.
   * 
   * @example
   * f1
   */
  name?: string;
  /**
   * @remarks
   * The feature type. Valid values include:
   * 
   * - INT32
   * 
   * - INT64
   * 
   * - FLOAT
   * 
   * - DOUBLE
   * 
   * - STRING
   * 
   * - BOOLEAN
   * 
   * - TIMESTAMP
   * 
   * @example
   * INT32
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectFeatureViewsResponseBodyFeatureViews extends $dara.Model {
  /**
   * @remarks
   * The feature view ID.
   * 
   * @example
   * 3
   */
  featureViewId?: string;
  /**
   * @remarks
   * A list of features.
   */
  features?: ListProjectFeatureViewsResponseBodyFeatureViewsFeatures[];
  /**
   * @remarks
   * The join ID of the feature entity.
   * 
   * @example
   * item_id
   */
  joinId?: string;
  /**
   * @remarks
   * The feature view name.
   * 
   * @example
   * feature_view1
   */
  name?: string;
  /**
   * @remarks
   * The join ID of the parent feature entity.
   * 
   * @example
   * item_id
   */
  parentJoinId?: string;
  /**
   * @remarks
   * The type of the feature view.
   * 
   * - Batch: A feature view that processes data in batches.
   * 
   * - Stream: A feature view that processes data as a stream.
   * 
   * - Sequence: A feature view that represents a sequence of features.
   * 
   * @example
   * Batch
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      featureViewId: 'FeatureViewId',
      features: 'Features',
      joinId: 'JoinId',
      name: 'Name',
      parentJoinId: 'ParentJoinId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureViewId: 'string',
      features: { 'type': 'array', 'itemType': ListProjectFeatureViewsResponseBodyFeatureViewsFeatures },
      joinId: 'string',
      name: 'string',
      parentJoinId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectFeatureViewsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of feature views.
   */
  featureViews?: ListProjectFeatureViewsResponseBodyFeatureViews[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE2AF33E-0C0D-51A8-B89B-C5F1DF261D92
   */
  requestId?: string;
  /**
   * @remarks
   * The total count of feature views.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      featureViews: 'FeatureViews',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureViews: { 'type': 'array', 'itemType': ListProjectFeatureViewsResponseBodyFeatureViews },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.featureViews)) {
      $dara.Model.validateArray(this.featureViews);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

