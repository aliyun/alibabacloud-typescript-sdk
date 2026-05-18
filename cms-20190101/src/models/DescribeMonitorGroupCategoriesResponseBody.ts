// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategoriesMonitorGroupCategoryCategoryItem extends $dara.Model {
  category?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategoriesMonitorGroupCategory extends $dara.Model {
  categoryItem?: DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategoriesMonitorGroupCategoryCategoryItem[];
  static names(): { [key: string]: string } {
    return {
      categoryItem: 'CategoryItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryItem: { 'type': 'array', 'itemType': DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategoriesMonitorGroupCategoryCategoryItem },
    };
  }

  validate() {
    if(Array.isArray(this.categoryItem)) {
      $dara.Model.validateArray(this.categoryItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategories extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 123456
   */
  groupId?: number;
  monitorGroupCategory?: DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategoriesMonitorGroupCategory;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      monitorGroupCategory: 'MonitorGroupCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      monitorGroupCategory: DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategoriesMonitorGroupCategory,
    };
  }

  validate() {
    if(this.monitorGroupCategory && typeof (this.monitorGroupCategory as any).validate === 'function') {
      (this.monitorGroupCategory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupCategoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The cloud services to which the resources in the application group belong and the number of resources that belong to the cloud service.
   */
  monitorGroupCategories?: DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategories;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E0347B0-EBC3-4769-A78D-D96F21C6BB52
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      monitorGroupCategories: 'MonitorGroupCategories',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      monitorGroupCategories: DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategories,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.monitorGroupCategories && typeof (this.monitorGroupCategories as any).validate === 'function') {
      (this.monitorGroupCategories as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

