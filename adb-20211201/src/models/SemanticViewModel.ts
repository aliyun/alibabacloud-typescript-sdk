// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SemanticViewModel extends $dara.Model {
  /**
   * @remarks
   * The annotation for the semantic view
   * 
   * @example
   * 这是一个定义销售额相关指标的视图
   */
  comment?: string;
  /**
   * @remarks
   * The YAML definition of the semantic view
   * 
   * @example
   * name: revenue_analysis
   * description: "Semantic view for analyzing revenue across products and customers"
   * 
   * tables:
   *   - name: customers
   *     description: "Customer information"
   *     base_table:
   *       schema: sales_db
   *       table: customers
   *     dimensions:
   *       - name: customer_name
   *         synonyms: ["client name", "customer"]
   *         description: "Full name of the customer"
   *         expr: c_name
   *         data_type: VARCHAR
   *       - name: customer_segment
   *         synonyms: ["segment", "market segment"]
   *         description: "Customer market segment"
   *         expr: c_mktsegment
   *         data_type: VARCHAR
   *         is_enum: true
   * 
   *   - name: orders
   *     description: "Order information"
   *     base_table:
   *       schema: sales_db
   *       table: orders
   *     dimensions:
   *       - name: order_date
   *         description: "Date when order was placed"
   *         expr: o_orderdate
   *         data_type: DATE
   *       - name: order_year
   *         description: "Year when order was placed"
   *         expr: YEAR(o_orderdate)
   *         data_type: NUMBER
   *     facts:
   *       - name: order_total
   *         description: "Total order amount"
   *         expr: o_totalprice
   *         data_type: NUMBER
   *     metrics:
   *       - name: total_orders
   *         description: "Total number of orders"
   *         expr: COUNT(*)
   *       - name: total_revenue
   *         description: "Total revenue of orders"
   *         expr: SUM(o_totalprice)
   *       - name: average_order_value
   *         description: "Average order value"
   *         expr: AVG(o_totalprice)
   * 
   * relationships:
   *   - name: orders_to_customers
   *     left_table: orders
   *     right_table: customers
   *     relationship_columns:
   *       - left_column: o_custkey
   *         right_column: c_custkey
   * 
   * metrics:
   *   - name: revenue_per_customer
   *     description: "Average revenue per customer"
   *     expr: orders.total_revenue / customers.customer_count
   */
  definition?: string;
  /**
   * @remarks
   * The vector retrieval match score (defaults to 1; during retrieval queries, it is a decimal between 0 and 1 representing vector similarity)
   * 
   * @example
   * 0.81
   */
  score?: number;
  /**
   * @remarks
   * The name of the semantic view
   * 
   * @example
   * revenue_analysis
   */
  viewName?: string;
  /**
   * @remarks
   * The schema where the semantic view resides
   * 
   * @example
   * sales_db
   */
  viewSchema?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      definition: 'Definition',
      score: 'Score',
      viewName: 'ViewName',
      viewSchema: 'ViewSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      definition: 'string',
      score: 'number',
      viewName: 'string',
      viewSchema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

